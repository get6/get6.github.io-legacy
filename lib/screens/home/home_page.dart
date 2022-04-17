import 'package:flutter/material.dart';
import 'package:get6_github_io/models/background_image_info.dart';

import '../../widgets/responsive.dart';
import '../../widgets/top_bar_contents.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
    Size screenSize = MediaQuery.of(context).size;
    _opacity = _scrollPosition < screenSize.height * 0.40
        ? _scrollPosition / (screenSize.height * 0.40)
        : 1;

    BackgroundImageInfo _imageInfo = _imageInfos[DateTime.now().weekday - 1];

    return Scaffold(
      backgroundColor: Theme.of(context).backgroundColor,
      extendBodyBehindAppBar: true,
      appBar: ResponsiveWidget.isSmallScreen(context)
          ? AppBar(
              backgroundColor:
                  Theme.of(context).bottomAppBarColor.withOpacity(_opacity),
              elevation: 0,
              title: Text(
                widget.title,
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
                  child: Text("Tags"),
                ),
                TextButton(
                  onPressed: () {},
                  child: Text("About me"),
                ),
              ],
            )
          : PreferredSize(
              preferredSize: Size(screenSize.width, 1000),
              child: TopBarContents(title: widget.title, opacity: _opacity),
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
                    'assets/images/cover${_imageInfo.number}.jpg',
                    fit: BoxFit.cover,
                    alignment: Alignment(_imageInfo.x, _imageInfo.y),
                  ),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
