import 'package:auto_route/annotations.dart';
import 'package:get6_github_io/screens/home/home_page.dart';
import 'package:get6_github_io/screens/life/life_page.dart';
import 'package:get6_github_io/screens/tech/tech_page.dart';
import 'package:get6_github_io/screens/tools/tools_page.dart';

import '../screens/about/about_me_page.dart';
import '../screens/books/books_page.dart';
import '../screens/others/others_page.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: HomePage, initial: true),
    AutoRoute(page: TechPage),
    AutoRoute(page: LifePage),
    AutoRoute(page: ToolsPage),
    AutoRoute(page: BooksPage),
    AutoRoute(page: OthersPage),
    AutoRoute(page: AboutMePage),
  ],
)
class $AppRouter {}
