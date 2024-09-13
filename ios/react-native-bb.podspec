Pod::Spec.new do |s|
    s.name         = "react-native-bb-library"
    s.version      = "0.1.0"
    s.summary      = "A React Native library with Rust and Swift integration."
    s.description  = <<-DESC
      A React Native library that integrates Rust components via Swift.
    DESC
    s.homepage     = "https://github.com/porco-rosso-j/react-native-bb-library"
    s.license      = { :type => "MIT", :file => "LICENSE" }
    s.author       = { "Porco" => "porcorossoj89@gmail.com" }
    s.source       = { :git => "https://github.com/porco-rosso-j/react-native-bb-library.git", :tag => "#{s.version}" }
    s.source_files  = "ios/BBSwift/Sources/**/*.{h,m,swift}"
    s.requires_arc = true
    s.swift_version = '5.6'
    s.dependency "React-Core"
    s.pod_target_xcconfig = { 
      'HEADER_SEARCH_PATHS' => '$(SRCROOT)/BBSwift/Swift/Sources/**',
      "HEADER_SEARCH_PATHS" => "$(SRCROOT)/BBSwift/Rust/target/aarch64-apple-ios/release",
     }
    s.ios.deployment_target = "11.0"
   
  end
  