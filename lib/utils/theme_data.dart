import 'package:flutter/material.dart';

ThemeData lightThemeData = ThemeData(
  primarySwatch: Colors.blueGrey,
  backgroundColor: Colors.white,
  cardColor: Colors.blueGrey[50],
  primaryTextTheme: TextTheme(
    button: TextStyle(
      color: Colors.blueGrey,
      decorationColor: Colors.blueGrey[300],
    ),
    subtitle1: TextStyle(color: Colors.blueGrey[900]),
    subtitle2: const TextStyle(color: Colors.black),
    headline1: TextStyle(color: Colors.blueGrey[800]),
  ),
  bottomAppBarColor: Colors.blueGrey[900],
  iconTheme: const IconThemeData(color: Colors.blueGrey),
  brightness: Brightness.light,
  useMaterial3: true,
);

ThemeData darkThemeData = ThemeData(
  primarySwatch: Colors.blueGrey,
  backgroundColor: Colors.blueGrey[900],
  cardColor: Colors.black,
  primaryTextTheme: TextTheme(
    button: TextStyle(
      color: Colors.blueGrey[200],
      decorationColor: Colors.blueGrey[50],
    ),
    subtitle1: TextStyle(color: Colors.blueGrey[300]),
    subtitle2: const TextStyle(color: Colors.white),
    headline1: const TextStyle(color: Colors.white70),
  ),
  bottomAppBarColor: Colors.black,
  iconTheme: IconThemeData(color: Colors.blueGrey[200]),
  brightness: Brightness.dark,
  useMaterial3: true,
);
