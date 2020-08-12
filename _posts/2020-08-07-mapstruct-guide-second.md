---
layout: post
title: MapStruct 에러 해결 두번째
tags: mapstruct spring
comments: true
---

[MapStruc 에러 해결 첫번째](https://get6.github.io/2020/08/07/mapstruct-guide-first.html)를 보고 오시는 걸 추천드립니다.  

이런 상황도 있었습니다.   

표현 계층에서 Transaction이 끝난 객체를 변환하는 작업(toDTO)을 하는 도중에 에러가 났었습니다.  
조회하지 않은 Entity 속 변수 중 하나가 JPA 에러가난 상황이었습니다.  

이 경우를 방지하기 위해선
```
public interface UserMapper {
    ...부분생략
  @BeforeMapping
  default <T> LinkedHashSet<T> fixLazyLoadingSet(Collection<?> c, @TargetType Class<?> targetType) {
    return PengHaUtils.wasInitialized(c) ? null : new LinkedHashSet<>();
  }

  @BeforeMapping
  default <T> List<T> fixLazyLoadingList(Collection<?> c, @TargetType Class<?> targetType) {
    return PengHaUtils.wasInitialized(c) ? null : Collections.emptyList();
  }
}
```
위 함수에선 Util class에 있는 함수를 호출합니다.
```
  /**
   * check JPA initialized for MapStruct
   *
   * @param c Target
   * @return Was this collection initialized?  Or is its data still not (fully) loaded?
   */
  public static boolean wasInitialized(Object c) {
    if (!(c instanceof PersistentCollection)) {
      return true;
    }
    PersistentCollection pc = (PersistentCollection) c;
    return pc.wasInitialized();
  }
```
이런식으로 UserMapper에서 User 객체 속 Collection 객체들을 변환하기 전에 초기화를 해주는 작업이 들어가야 에러가 나지 않습니다.

---
또 다른 상황은 

UserRoleMapper에 ```List<UserRoleDTO> toDTO(Collection<UserRoleDTO> userRoleDTOs)```를 선언한 일이 있었습니다.  
이렇게 User Entity를 기준으로 하위 {Entity}Mapper.class 마다 Collection 변환을 만들어 주면 상위 객체에서도 참조하는 상황이 생깁니다.

이런 경우 User Entity에 있는 userRoles가 이 메소드를 활용하여 변환 되므로 JPA LazyException이 발생합니다.   
위에 있는 BeforeMapping이 무시되고 해당 구현 함수를 참조하여 위 에러가 해결되지 않았습니다.  
따라서 Collection DTO <-> Entity 구현 함수는 상위 EntityMapper에 구현 하시길 바랍니다.
