import 'package:flutter/material.dart';

class TopBarContents extends StatefulWidget {
  const TopBarContents({Key? key, required this.title, required this.opacity})
      : super(key: key);

  final String title;
  final double opacity;

  @override
  State<TopBarContents> createState() => _TopBarContentsState();
}

class _TopBarContentsState extends State<TopBarContents> {
  final List _isHovering = [false, false, false, false, false];

  Widget _menuInkWell(String title, int index) {
    return InkWell(
      onHover: (value) => setState(() {
        value ? _isHovering[index] = true : _isHovering[index] = false;
      }),
      onTap: () {},
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

    return PreferredSize(
      preferredSize: Size(screenSize.width, 1000),
      child: Container(
        color: Colors.blueGrey.shade900.withOpacity(widget.opacity),
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                widget.title,
                style: TextStyle(
                  color: Colors.blueGrey.shade100,
                  fontSize: 20,
                  fontFamily: 'Montserrat',
                  fontWeight: FontWeight.w400,
                  letterSpacing: 3,
                ),
              ),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    SizedBox(width: screenSize.width / 8),
                    _menuInkWell('Discover', 0),
                    SizedBox(width: screenSize.width / 20),
                    _menuInkWell('Contact Us', 1),
                  ],
                ),
              ),
              _menuInkWell('Sign Up', 2),
              SizedBox(width: screenSize.width / 50),
              _menuInkWell('Login', 3),
            ],
          ),
        ),
      ),
    );
  }
}
