// **************************************************************************
// AutoRouteGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouteGenerator
// **************************************************************************
//
// ignore_for_file: type=lint

import 'package:auto_route/auto_route.dart' as _i8;
import 'package:flutter/material.dart' as _i9;

import '../screens/about/about_me_page.dart' as _i7;
import '../screens/books/books_page.dart' as _i5;
import '../screens/home/home_page.dart' as _i1;
import '../screens/life/life_page.dart' as _i3;
import '../screens/others/others_page.dart' as _i6;
import '../screens/tech/tech_page.dart' as _i2;
import '../screens/tools/tools_page.dart' as _i4;

class AppRouter extends _i8.RootStackRouter {
  AppRouter([_i9.GlobalKey<_i9.NavigatorState>? navigatorKey])
      : super(navigatorKey);

  @override
  final Map<String, _i8.PageFactory> pagesMap = {
    HomeRoute.name: (routeData) {
      return _i8.MaterialPageX<dynamic>(
          routeData: routeData, child: const _i1.HomePage());
    },
    TechRoute.name: (routeData) {
      return _i8.MaterialPageX<dynamic>(
          routeData: routeData, child: const _i2.TechPage());
    },
    LifeRoute.name: (routeData) {
      return _i8.MaterialPageX<dynamic>(
          routeData: routeData, child: const _i3.LifePage());
    },
    ToolsRoute.name: (routeData) {
      return _i8.MaterialPageX<dynamic>(
          routeData: routeData, child: const _i4.ToolsPage());
    },
    BooksRoute.name: (routeData) {
      return _i8.MaterialPageX<dynamic>(
          routeData: routeData, child: const _i5.BooksPage());
    },
    OthersRoute.name: (routeData) {
      return _i8.MaterialPageX<dynamic>(
          routeData: routeData, child: const _i6.OthersPage());
    },
    AboutMeRoute.name: (routeData) {
      return _i8.MaterialPageX<dynamic>(
          routeData: routeData, child: const _i7.AboutMePage());
    }
  };

  @override
  List<_i8.RouteConfig> get routes => [
        _i8.RouteConfig(HomeRoute.name, path: '/'),
        _i8.RouteConfig(TechRoute.name, path: '/tech-page'),
        _i8.RouteConfig(LifeRoute.name, path: '/life-page'),
        _i8.RouteConfig(ToolsRoute.name, path: '/tools-page'),
        _i8.RouteConfig(BooksRoute.name, path: '/books-page'),
        _i8.RouteConfig(OthersRoute.name, path: '/others-page'),
        _i8.RouteConfig(AboutMeRoute.name, path: '/about-me-page')
      ];
}

/// generated route for
/// [_i1.HomePage]
class HomeRoute extends _i8.PageRouteInfo<void> {
  const HomeRoute() : super(HomeRoute.name, path: '/');

  static const String name = 'HomeRoute';
}

/// generated route for
/// [_i2.TechPage]
class TechRoute extends _i8.PageRouteInfo<void> {
  const TechRoute() : super(TechRoute.name, path: '/tech-page');

  static const String name = 'TechRoute';
}

/// generated route for
/// [_i3.LifePage]
class LifeRoute extends _i8.PageRouteInfo<void> {
  const LifeRoute() : super(LifeRoute.name, path: '/life-page');

  static const String name = 'LifeRoute';
}

/// generated route for
/// [_i4.ToolsPage]
class ToolsRoute extends _i8.PageRouteInfo<void> {
  const ToolsRoute() : super(ToolsRoute.name, path: '/tools-page');

  static const String name = 'ToolsRoute';
}

/// generated route for
/// [_i5.BooksPage]
class BooksRoute extends _i8.PageRouteInfo<void> {
  const BooksRoute() : super(BooksRoute.name, path: '/books-page');

  static const String name = 'BooksRoute';
}

/// generated route for
/// [_i6.OthersPage]
class OthersRoute extends _i8.PageRouteInfo<void> {
  const OthersRoute() : super(OthersRoute.name, path: '/others-page');

  static const String name = 'OthersRoute';
}

/// generated route for
/// [_i7.AboutMePage]
class AboutMeRoute extends _i8.PageRouteInfo<void> {
  const AboutMeRoute() : super(AboutMeRoute.name, path: '/about-me-page');

  static const String name = 'AboutMeRoute';
}
