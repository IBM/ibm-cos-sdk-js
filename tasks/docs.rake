namespace :docs do
  task :directory do
    mkdir_p "doc"
  end

  desc "Build API documentation"
  task :api => [:directory] do
    ENV['SITEMAP_BASEURL'] = 'https://ibm-public-cos.github.io/crs-docs/node/'

    rm_rf "doc/latest"
    args = ENV['ARGS'] ? ENV['ARGS'] : []
    sh "bundle exec yard #{args.join(' ')}"
  end
end

# TODO: move code for docs:api under docs once it's updated in internal release code
desc "Builds API documentation"
task :docs => ['docs:api']
