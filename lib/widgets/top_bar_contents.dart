import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:get6_github_io/utils/app_router.gr.dart';

class TopBarContents extends StatefulWidget {
  const TopBarContents({Key? key, required this.title, required this.opacity})
      : super(key: key);

  final String title;
  final double opacity;

  @override
  State<TopBarContents> createState() => _TopBarContentsState();
}

class _TopBarContentsState extends State<TopBarContents> {
  final List _isHovering = [false, false, false, false, false, false];

  Widget _menuInkWell(String title, int index, void Function() onTab) {
    return InkWell(
      onHover: (value) => setState(() {
        value ? _isHovering[index] = true : _isHovering[index] = false;
      }),
      onTap: onTab,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            title,
            style: TextStyle(
              color: _isHovering[index] ? Colors.blue.shade200 : Colors.white,
            ),
          ),
          const SizedBox(height: 5),
          Visibility(
            maintainAnimation: true,
            maintainState: true,
            maintainSize: true,
            visible: _isHovering[index],
            child: Container(
              width: 20,
              height: 2,
              color: Colors.white,
            ),
          )
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;
    final StackRouter router = AutoRouter.of(context);

    return PreferredSize(
      preferredSize: Size(screenSize.width, 1000),
      child: Container(
        color: Colors.blueGrey.shade900.withOpacity(widget.opacity),
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                padding: EdgeInsets.all(4),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: Colors.black,
                ),
                child: Text(
                  widget.title,
                  style: TextStyle(
                    color: Colors.blueGrey.shade100,
                    fontSize: 20,
                    fontWeight: FontWeight.w400,
                    letterSpacing: 3,
                  ),
                ),
              ),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    SizedBox(width: screenSize.width / 8),
                    _menuInkWell(
                        'Tech', 0, () => router.replace(const TechRoute())),
                    SizedBox(width: screenSize.width / 20),
                    _menuInkWell(
                        'Life', 1, () => router.navigate(const LifeRoute())),
                    SizedBox(width: screenSize.width / 20),
                    _menuInkWell(
                        'Tools', 2, () => router.navigate(const ToolsRoute())),
                    SizedBox(width: screenSize.width / 20),
                    _menuInkWell(
                        'Books', 3, () => router.navigate(const BooksRoute())),
                    SizedBox(width: screenSize.width / 20),
                    _menuInkWell('Others', 4,
                        () => router.navigate(const OthersRoute())),
                  ],
                ),
              ),
              SizedBox(width: screenSize.width / 50),
              _menuInkWell(
                  'About me', 5, () => router.navigate(const AboutMeRoute())),
            ],
          ),
        ),
      ),
    );
  }
}
