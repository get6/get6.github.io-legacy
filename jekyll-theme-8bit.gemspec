# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name        = 'githubPages'
  spec.version     = '0.4.1'
  spec.licenses    = ['MIT']
  spec.summary     = "This is My blog!"
  spec.description = "Write here My experience!"
  spec.authors     = ['Sung Jun Hwang']
  spec.email       = 'ittae.com@gmail.com'
  spec.files       = ["lib/example.rb"]
  spec.homepage    = 'https://get6.github.io'
  # spec.metadata    = { "source_code_uri" => "https://get6.github.io/" }

  spec.files       = `git ls-files -z`.split("\x0").select do |f|
    f.match(/^(assets|_layouts|_includes|_sass|LICENSE|README)/i)
  end

  spec.platform    = Gem::Platform::RUBY
  spec.add_runtime_dependency 'jekyll', '>= 3.8.5', '< 4.1.0'
  spec.add_runtime_dependency 'jekyll-paginate', '~> 1.1.0'
  spec.add_runtime_dependency 'jekyll-seo-tag', '~> 2.5'
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency 'wdm', '~> 0.1.0' if Gem.win_platform?
  spec.add_development_dependency 'bundler', '~> 2.1.0'
  spec.add_development_dependency 'html-proofer', '~> 3.10'
  spec.add_development_dependency 'rake', '~> 13.0.0'
  spec.add_development_dependency 'rubocop', '~> 0.62'
  spec.add_development_dependency 'w3c_validators', '~> 1.3.4'
end
