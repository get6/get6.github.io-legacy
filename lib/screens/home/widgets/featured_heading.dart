import 'package:flutter/material.dart';
import 'package:get6_github_io/widgets/responsive.dart';

class FeaturedHeading extends StatelessWidget {
  const FeaturedHeading({Key? key, required this.screenSize}) : super(key: key);

  Widget title(double fontSize) => Text(
        'Featured',
        style: TextStyle(
          fontSize: fontSize,
          fontFamily: 'Montserrat',
          fontWeight: FontWeight.bold,
        ),
      );

  Widget subtitle(BuildContext context) => Text(
        'Unique wildlife tours & destinations',
        textAlign: TextAlign.end,
        style: Theme.of(context).primaryTextTheme.subtitle1,
      );

  final Size screenSize;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: ResponsiveWidget.isSmallScreen(context)
          ? Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                title(24),
                const SizedBox(height: 5),
                subtitle(context)
              ],
            )
          : Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [title(40), subtitle(context)],
            ),
    );
  }
}
