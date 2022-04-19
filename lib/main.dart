import 'package:flutter/material.dart';
import 'package:get6_github_io/screens/home/home_page.dart';
import 'package:get6_github_io/utils/theme_data.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  final title = "Jun Wick's blog";

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: title,
      theme: lightThemeData,
      darkTheme: darkThemeData,
      debugShowCheckedModeBanner: false,
      home: HomePage(title: title),
    );
  }
}
