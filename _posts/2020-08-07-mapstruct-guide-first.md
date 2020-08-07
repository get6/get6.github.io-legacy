---
layout: post
title: MapStruct 에러 해결 첫번째
tags: mapstruct spring
comments: true
---

Mapstruct를 실무에 사용해보면서 겪은 경험을 공유하고자 합니다.  

[MapStruct](https://mapstruct.org/)에 Get Started에는 정말 간단하게 설명되어 있습니다.
DTO <-> Entity를 변경해주는 간단한 library 이지만 확장성은 대단합니다.  

단순 작업을 build 단계에서 생성해주어 {Entity}Mapper interface를 {Entity}MapperImpl로 만들어줍니다.

예를 들어 User Entity에 UserRole이 있다고 가정 해보겠습니다.

공식 홈페이지에 더 자세한 설명이 있지만 저희 프로젝트에서 사용하는 모습은 이렇습니다. 
```
@Mapper(uses = {UserRoleMapper.class}, unmappedTargetPolicy = ReportingPolicy.ERROR, nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
public interface UserMapper {

  /**
   * UserMapper는 연관 Entity Mapper를 사용합니다. users 속한 Mapper 에는 @Mapping(target = "user", ignore = true) 설정 되어있습니다.
   */
  UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

  UserDTO toDTO(User user);

  User toEntity(UserDTO userDTO);
```

@Mapper annotation에 적힌 부분을 설명드리겠습니다.  

users - 다른 Mapper 파일을 참조하려고 할 때, 사용됩니다.  

users에 사용된 UserRoleMapper.class입니다.
```
@Mapper(uses = {RoleMapper.class}, unmappedTargetPolicy = ReportingPolicy.ERROR, nullValueMappingStrategy = NullValueMappingStrategy.RETURN_DEFAULT)
public interface UserRoleMapper {

  UserRoleMapper INSTANCE = Mappers.getMapper(UserRoleMapper.class);

  @Mapping(target = "user", ignore = true)
  UserRoleDTO toDTO(UserRole userRole);

  @Mapping(target = "user", ignore = true)
  UserRole toEntity(UserRoleDTO userRoleDTO);
}
```
UserRoleMapper에선 UserRole 안에 있는 user가 변환되는걸 막아야 무한 참조에 빠지지 않습니다.  

그리고 User가 저장되는 기준으로 Entity변환 후 UserRole을 setUserRole 함수를 이용해 담아 주시면 저장이 되어 아직 문제가 된 상황은 발견하지 못했습니다.  
아직 발견하지 못한 문제가 있을 수 있습니다.(저도 알고싶어요..)

unmappedTargetPolicy - DTO와 Entity에 선언된 변수들이 ignore = true로 되어있지 않은 변수가 변환이 안되는 경우 에러가 나며 Run 되지 않게합니다.  

nullValueMappingStrategy - null인 변수를 초기화 해줍니다. Entity로 변환된 객체에서 .get{OtherEntity}()를 할때 NullpointException을 방지해줍니다.  

---

public abstract class UserMapper로 만들어서 beforeMapping이나 afterMapping을 통해 제어도 가능하지만,  
 한 파일에 다른 Entity작업을 몰아주는 것이 옳은 것인가 하는 생각이 들어서 각 Entity마다 Mapper를 만들었습니다.

그래서 Domain별 파일구조는
- {domain}
    - controller
    - model
        - dto
        - entity
        - mapper <- 여기에 MapStruct 파일이 domain별로 들어가 있습니다.
        - validator
    - repository
    - service

이런 파일구조로 되어 있습니다.

UserMapper.INSTANCE.toEntity, toDTO 함수는 DDD패턴으로 각 Entity에서 수행하도록 함수를 구현해줍니다.
```
@Entity
public class User {
    
    ... 다른 부분 생략

    public static User toEntity(UserDTO userDTO) {
        return UserMapper.INSTANCE.toEntity(userDTO);
    }
}
```
DTO <-> Entity를 변환해주는 작업을 하게되면 User 객체 (DTO, Entity) 안에는 ```List<UserRoleDTO> userRoles, Set<UserRole> userRoles```로 되어있는 부분까지도 변환을 해줍니다.  

> 그러나 Request 요청으로 넘어온 UserDTO 객체 안에 userRoles를 순서대로 넣고싶은 경우 어떻게 할까요?   

> 왜 DTO는 List interface이고 Entity에는 Set일까요?  

DTO가 Request로 넘어올때 Set으로 선언되어 있는 변수는 순서를 보장하지 않아 정렬한 채로 보내도 뒤죽박죽으로 옵니다.  
그런 이유로 List로 되어있습니다.

Entity에선 중복을 막기 위해 Set으로 선언했습니다.

Set interface 구현 class는 HashSet으로 되어있어 List로 일괄 변경했습니다.  

처음에는 DTO쪽을 List로만 구현하고 나서 확인해보면 순서대로 와서 이제 DB에 제대로 들어가겠지 싶어서 DB에 저장을 몇번 테스트 해보니 몇건은 정상이었지만 역시 뒤죽박죽이었습니다.  

원인을 찾고보니 DTO가 Entity로 변화되는 시점에 ```Set<UserRole> userRoles```가 HashSet으로 생성되어서 그랬습니다.  

Entity를 SortedSet으로 해야하나 싶었지만, JPA가 허용하지 않아서 Set으로 유지했습니다.

결국 LinkedHashSet을 이용해 List 순서를 이어받아야 하는 상황이었습니다.  

원하던 상황이었지만 구현된 {Entity}MapperImpl을 살펴보면 Set은 HashSet으로 되어있고 interface를 기준으로 알아서 생성되기 때문에 손을 댈 수가 없었습니다.

저는 정렬을 따로 구현하고 싶지 않았고, MapStruct를 통해 쉽게 바꾸고 싶었습니다.

#### 해결책은

UserRoleMapper에 Collection 변환 함수를 만드는 것이 아니고 UserMapper에
```
LinkedHashSet<UserRole> userRoleDTOToEntityLinkedHashSet(Collection<UserRoleDTO> userRoleDTOs);
```
이런식으로 Collection 변수마다 하나씩 만들어 주게되면 이 함수를 참조하여 for문을 반복합니다.  
덕분에 해결할 수 있었습니다.  
개발 이란게 가끔은 답답하더라도 이런식으로 방법을 찾게되면 참 기분이 좋아집니다.
문제 없이 돌아가기 위해선 [MapStruc 에러 해결 두번째](https://get6.github.io/2020/08/07/mapstruct-guide-second.html)에 나온 방법도 필요합니다.
