import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:get6_github_io/screens/home/home_page.dart';
import 'package:get6_github_io/utils/app_router.gr.dart';
import 'package:get6_github_io/utils/common_provider.dart';
import 'package:get6_github_io/utils/theme_data.dart';

void main() {
  runApp(ProviderScope(child: MyApp()));
}

class MyApp extends ConsumerWidget {
  MyApp({Key? key}) : super(key: key);
  final _appRouter = AppRouter();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final String title = ref.watch(titleProvider);
    return MaterialApp.router(
      title: title,
      theme: lightThemeData,
      darkTheme: darkThemeData,
      debugShowCheckedModeBanner: false,
      routerDelegate: _appRouter.delegate(),
      routeInformationParser: _appRouter.defaultRouteParser(),
    );
  }
}
