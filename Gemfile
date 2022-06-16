source 'https://rubygems.org'

gem 'rake'

group :documentation do
  gem 'rdiscount'
  gem 'yard', git: 'https://github.com/lsegal/yard.git', branch: 'main'
  gem 'yard-sitemap', '~> 1.0'
  gem 'yard-js', git: 'https://github.com/lsegal/yard-js.git'
	gem 'parsejs', path: './doc-src/parsejs'
end

group :release do
  gem 'redcarpet', '~> 3.0'
  gem 'samus'
end
