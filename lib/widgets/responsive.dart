import 'package:flutter/material.dart';

class ResponsiveWidget extends StatelessWidget {
  const ResponsiveWidget({
    Key? key,
    required this.largeSreen,
    this.mediumScreen,
    this.smallScreen,
  }) : super(key: key);

  final Widget largeSreen;
  final Widget? mediumScreen;
  final Widget? smallScreen;

  static bool isLargeScreen(BuildContext context) =>
      1200 < MediaQuery.of(context).size.width;
  static bool isMediumlScreen(BuildContext context) =>
      800 <= MediaQuery.of(context).size.width &&
      MediaQuery.of(context).size.width <= 1200;
  static bool isSmallScreen(BuildContext context) =>
      MediaQuery.of(context).size.width < 800;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
        if (1200 < constraints.maxWidth) {
          return largeSreen;
        } else if (800 <= constraints.maxWidth &&
            constraints.maxWidth <= 1200) {
          return mediumScreen ?? largeSreen;
        } else {
          return smallScreen ?? largeSreen;
        }
      },
    );
  }
}
