# coding=utf-8

require "erb"
require "./post.rb"
require "maruku"

@posts = Array.new
Dir.foreach("_posts") do |x|
  unless x == "." or x == ".."
    title = x
    content = File.new("_posts/#{x}").read
    doc = Maruku.new(content)
    content = doc.to_html
    post = Post.new(title, content)
    @posts << post
  end
end

f = File.new("layout.erb")
html = ERB.new(f.read).result(binding)
puts html

File.open("index.html", "w") do |x|
  x.puts(html)
end
