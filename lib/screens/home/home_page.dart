import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:get6_github_io/models/background_image_info.dart';
import 'package:get6_github_io/utils/common_provider.dart';

import '../../widgets/responsive.dart';
import '../../widgets/top_bar_contents.dart';
import 'widgets/featured_heading.dart';

class HomePage extends ConsumerStatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  ConsumerState<HomePage> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage> {
  late ScrollController _scrollController;
  double _scrollPosition = 0;
  double _opacity = 0;

  void _scrollListener() {
    setState(() {
      _scrollPosition = _scrollController.position.pixels;
    });
  }

  @override
  void initState() {
    super.initState();
    ref.read(titleProvider);
    _scrollController = ScrollController();
    _scrollController.addListener(_scrollListener);
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  final List _imageInfos = [
    BackgroundImageInfo(number: 1, y: .5),
    BackgroundImageInfo(number: 2, y: .0),
    BackgroundImageInfo(number: 3, y: .4),
    BackgroundImageInfo(number: 4, y: .0),
    BackgroundImageInfo(number: 5, y: .7),
    BackgroundImageInfo(number: 6, y: .3),
    BackgroundImageInfo(number: 7, y: .2),
  ];

  @override
  Widget build(BuildContext context) {
    final String title = ref.watch(titleProvider);
    Size screenSize = MediaQuery.of(context).size;
    _opacity = _scrollPosition < screenSize.height * 0.40
        ? _scrollPosition / (screenSize.height * 0.40)
        : 1;

    BackgroundImageInfo imageInfo = _imageInfos[DateTime.now().weekday - 1];

    return Scaffold(
      backgroundColor: Theme.of(context).backgroundColor,
      extendBodyBehindAppBar: true,
      appBar: ResponsiveWidget.isSmallScreen(context)
          ? AppBar(
              backgroundColor:
                  Theme.of(context).bottomAppBarColor.withOpacity(_opacity),
              elevation: 0,
              title: Text(
                title,
                style: TextStyle(
                  color: Colors.blueGrey.shade100,
                  fontSize: 20,
                  fontFamily: 'Montserrat',
                  fontWeight: FontWeight.w400,
                  letterSpacing: 3,
                ),
              ),
              actions: [
                TextButton(
                  onPressed: () {},
                  child: const Text("Tags"),
                ),
                TextButton(
                  onPressed: () {},
                  child: const Text("About me"),
                ),
              ],
            )
          : PreferredSize(
              preferredSize: Size(screenSize.width, 1000),
              child: TopBarContents(title: title, opacity: _opacity),
            ),
      body: SingleChildScrollView(
        controller: _scrollController,
        physics: const ClampingScrollPhysics(),
        child: Column(
          children: [
            Stack(
              children: [
                SizedBox(
                  height: screenSize.height * .45,
                  width: screenSize.width,
                  child: Image.asset(
                    'assets/images/cover${imageInfo.number}.jpg',
                    fit: BoxFit.cover,
                    alignment: Alignment(imageInfo.x, imageInfo.y),
                  ),
                ),
                Column(
                  children: [
                    FeaturedHeading(screenSize: screenSize),
                    // FeaturedTiles(screenSize: screenSize),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
