// swift-tools-version: 5.6

import PackageDescription

let package = Package(
    name: "BBSwift",
    platforms: [
        .macOS(.v10_15), 
        .iOS(.v14)],
    products: [
        .library(
            name: "BBSwift",
            targets: ["BBSwift"]),
    ],
    targets: [
        .target(
            name: "BBSwift",
            dependencies: ["BBSwiftFramework"],
            path: "Swift/Sources/BBSwift",
            linkerSettings: [ .linkedFramework("SystemConfiguration") ],
        ),
       .binaryTarget(
            name: "BBSwiftFramework",
            url: "https://github.com/porco-rosso-j/react-native-bb.js/releases/download/v1.0.0/BBSwift.xcframework.zip",
            checksum: "5803e1e175ec0afef74ba0c3a3c92955889a6d6a70dce2ca4d5d25b07a062d59"
        ),
        .testTarget(
            name: "SwiftBridgeTest",
            dependencies: ["BBSwift"],
            path: "Swift/Tests/SwiftBridgeTest"
        ),
    ]
)
