import web
urls = ("/.*", "hello")
render=web.template.render("templates")
app = web.application(urls, globals())
class hello:
    name={1:"Shadow Song",2:"MYW"}
    def GET(self):
        return render.hello(self.name)
if __name__ == "__main__":
    app.run()