---
title: 플러터 상태관리 개념
date: "2020-10-13"
tags: ["frontend", "flutter"]
---

플러터 상태관리 개념을 정리하려고 한다.

StatefulWidget은 상태관리를 하기위한 위젯이다.

나는 riverpod을 통해 상태관리를 하려고 공부 중이다.

아래 코드처럼 StatefultWidget을 작성한다.  
상태관리 될 변수들을 선언하는 곳은 State를 extends한 class에 적는다.

```dart

class Test extends StatefulWidget {
  @override
  _TestState createState() => _TestState();
}

class _TestState extends State<Test> {
  _index = 0; // 상태관리 될 변수
  @override
  Widget build(BuildContext context) {
    return Container(
        child: FlatButton(
            child: Text("Hello"),
            onPressed: () {
                setState(() {
                    _index++;
                })
            }
        )
    );
  }
}
```

상태 변환 호출 함수를 통해 변경된 부분을 새로 바꾼다.

```dart
setState(() {});
```

상태변화를 관리하고 알려주는 Widget이나 package를 사용하면 StatefulWidget의 사용을 줄일 수 있어보인다.

riverpod에는 HookWidget이 있어 StatefulWidget없이도 사용할 수 있나보다.
