"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.default = (function (width, height, backgroundColor) {
    return {
        modalContainer: {
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        },
        watchOrigin: {
            position: 'absolute',
            width: width,
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center'
        },
        watchOriginTouchable: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 30,
            borderColor: 'white',
            borderWidth: 0.5,
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        watchOriginText: { color: 'white', backgroundColor: 'transparent' },
        imageStyle: {},
        container: { backgroundColor: backgroundColor },
        moveBox: { flexDirection: 'row', alignItems: 'center' },
        menuContainer: {
            position: 'absolute',
            width: width,
            height: height,
            left: 0,
            bottom: 0,
            zIndex: 12
        },
        menuShadow: {
            position: 'absolute',
            width: width,
            height: height,
            backgroundColor: 'black',
            left: 0,
            bottom: 0,
            opacity: 0.2,
            zIndex: 10
        },
        menuContent: {
            position: 'absolute',
            width: width,
            left: 0,
            bottom: 0,
            zIndex: 11
        },
        operateContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 40,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
        },
        operateText: { color: '#333' },
        loadingTouchable: { width: width, height: height },
        loadingContainer: __assign({}, react_native_1.StyleSheet.absoluteFillObject, { flex: 1, justifyContent: 'center', alignItems: 'center' }),
        arrowLeftContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            justifyContent: 'center',
            zIndex: 13
        },
        arrowRightContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            justifyContent: 'center',
            zIndex: 13
        }
    };
});
exports.simpleStyle = {
    count: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 38,
        zIndex: 13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    countText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {
            width: 0,
            height: 0.5
        },
        textShadowRadius: 0
    }
};
//# sourceMappingURL=image-viewer.style.js.map