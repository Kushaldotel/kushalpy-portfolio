export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "code"; lang: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; variant: "tip" | "warning" | "info"; text: string }
  | { type: "divider" };

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  gradient: string;
  content: ContentBlock[];
};

export const blogs: Blog[] = [
  {
    slug: "python-programming-beginners-guide",
    title: "Python in 2025: The Complete Beginner's Roadmap to Writing Real Code",
    excerpt:
      "Python is the most beginner-friendly language that also scales to production-grade systems. This guide takes you from zero installation to shipping your first real project — no fluff.",
    category: "Programming",
    tags: ["Python", "Beginners", "Programming", "Tutorial"],
    readTime: "12 min read",
    publishedAt: "2025-05-01",
    gradient: "from-blue-500 to-cyan-400",
    content: [
      {
        type: "p",
        text: "Every programmer remembers their first language. For a growing majority of developers today, that language is Python — and for good reason. It reads almost like English, runs on every platform, and has libraries for virtually everything. But there's a trap most beginners fall into: spending weeks on syntax tutorials without ever building something real. This guide will not let that happen to you.",
      },
      {
        type: "h2",
        text: "Why Python in 2025?",
      },
      {
        type: "p",
        text: "The programming world is full of languages competing for your attention. So before you invest time, you deserve a clear answer: why Python? First, Python consistently ranks as the most-used language for data science, machine learning, and AI — the fastest-growing fields in tech. Second, it's the language of frameworks like Django and FastAPI, which power production backends for Instagram, Pinterest, and hundreds of SaaS products. Third, it has the most beginner-friendly syntax of any production-grade language. You write what you mean, and it works.",
      },
      {
        type: "ul",
        items: [
          "Used by Google, Netflix, Instagram, NASA, and most AI labs",
          "Fastest-growing language in data science and machine learning",
          "Has libraries for web, automation, data, AI, scripting, APIs",
          "Readable syntax that matches how you think",
          "Massive community and job market demand",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Don't wait until you feel 'ready' to start coding. The fastest way to learn Python is to build something broken, fix it, and repeat. Reading tutorials without building is just delayed learning.",
      },
      {
        type: "h2",
        text: "Setting Up Your Environment the Right Way",
      },
      {
        type: "p",
        text: "Most tutorials tell you to download Python from python.org and start coding. That works — until you have two projects requiring different Python versions and everything breaks. The professional approach is to use a version manager from day one.",
      },
      {
        type: "h3",
        text: "Install pyenv (version manager)",
      },
      {
        type: "code",
        lang: "bash",
        text: `# macOS / Linux
curl https://pyenv.run | bash

# Add to ~/.bashrc or ~/.zshrc
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# Install Python
pyenv install 3.12.3
pyenv global 3.12.3

# Verify
python --version  # Python 3.12.3`,
      },
      {
        type: "h3",
        text: "Virtual environments: isolate every project",
      },
      {
        type: "p",
        text: "A virtual environment keeps each project's dependencies separate. This means project A can use Django 4.2 while project B uses Django 5.0, without conflicts. Always create a virtual environment before installing anything.",
      },
      {
        type: "code",
        lang: "bash",
        text: `# Create a virtual environment
python -m venv venv

# Activate it
source venv/bin/activate    # macOS/Linux
venv\\Scripts\\activate       # Windows

# Your prompt now shows (venv)
# Install packages inside it
pip install requests

# Freeze dependencies
pip freeze > requirements.txt`,
      },
      {
        type: "h2",
        text: "Python Fundamentals You Must Know Cold",
      },
      {
        type: "p",
        text: "Before you build anything complex, these fundamentals need to be muscle memory. They are the grammar of Python. You don't need to memorize them — you need to understand them well enough to use them without thinking.",
      },
      {
        type: "h3",
        text: "Variables, Types, and Dynamic Typing",
      },
      {
        type: "code",
        lang: "python",
        text: `# Python is dynamically typed — no type declarations needed
name = "Kushal"          # str
age = 25                  # int
gpa = 3.8                 # float
is_employed = True        # bool
skills = ["Python", "Django", "AWS"]  # list
profile = {"name": "Kushal", "age": 25}  # dict

# f-strings: the right way to format strings
print(f"Name: {name}, Age: {age}")

# Type checking
print(type(name))         # <class 'str'>
print(isinstance(age, int))  # True`,
      },
      {
        type: "h3",
        text: "Control Flow",
      },
      {
        type: "code",
        lang: "python",
        text: `# if / elif / else
score = 87

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

# Loops
for i in range(5):
    print(i)            # 0, 1, 2, 3, 4

fruits = ["apple", "mango", "banana"]
for fruit in fruits:
    print(fruit.upper())

# While loop
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# List comprehension (very Pythonic)
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]`,
      },
      {
        type: "h3",
        text: "Data Structures in Depth",
      },
      {
        type: "p",
        text: "Python's built-in data structures are powerful. Lists, tuples, dictionaries, and sets cover 95% of your day-to-day needs. Understanding when to use which structure is a skill that separates beginners from intermediate developers.",
      },
      {
        type: "code",
        lang: "python",
        text: `# List — ordered, mutable
users = ["Alice", "Bob", "Charlie"]
users.append("Dave")
users.remove("Bob")
users.sort()

# Tuple — ordered, immutable (great for fixed data)
coordinates = (27.7, 85.3)
lat, lng = coordinates   # unpacking

# Dictionary — key-value pairs
user = {
    "id": 1,
    "name": "Kushal",
    "skills": ["Python", "Django"],
}
print(user.get("email", "not set"))  # safe access

# Set — unique values
visited = {"python.org", "docs.python.org"}
visited.add("realpython.com")
visited.add("python.org")   # duplicate ignored
print(len(visited))          # 3`,
      },
      {
        type: "h2",
        text: "Functions: The Core Unit of Python Code",
      },
      {
        type: "p",
        text: "If you understand functions deeply — including closures, decorators, and first-class functions — you understand most of what makes Python powerful. Functions are not just code blocks you call; they are objects you can pass around, return from other functions, and modify with decorators.",
      },
      {
        type: "code",
        lang: "python",
        text: `# Basic function with default args
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Kushal"))           # Hello, Kushal!
print(greet("Kushal", "Hey"))    # Hey, Kushal!

# *args and **kwargs
def build_profile(name, *skills, **extras):
    profile = {"name": name, "skills": list(skills)}
    profile.update(extras)
    return profile

result = build_profile("Kushal", "Python", "AWS", age=25, city="Kathmandu")

# Lambda (anonymous function)
double = lambda x: x * 2
nums = [1, 2, 3, 4, 5]
doubled = list(map(double, nums))   # [2, 4, 6, 8, 10]
filtered = list(filter(lambda x: x > 2, nums))  # [3, 4, 5]

# Decorator
def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Done. Returned: {result}")
        return result
    return wrapper

@log_call
def add(a, b):
    return a + b

add(3, 4)`,
      },
      {
        type: "h2",
        text: "Object-Oriented Python",
      },
      {
        type: "p",
        text: "Object-oriented programming (OOP) in Python is clean and expressive. Classes let you model real-world entities with data (attributes) and behaviour (methods). Understanding OOP unlocks Django models, SQLAlchemy, and most major frameworks.",
      },
      {
        type: "code",
        lang: "python",
        text: `class Developer:
    # Class attribute (shared across instances)
    platform = "GitHub"

    def __init__(self, name: str, language: str, years: int):
        self.name = name
        self.language = language
        self.years = years
        self._projects: list[str] = []  # 'private' by convention

    def add_project(self, project: str) -> None:
        self._projects.append(project)

    @property
    def experience_level(self) -> str:
        if self.years < 2:
            return "Junior"
        elif self.years < 5:
            return "Mid-level"
        return "Senior"

    def __repr__(self) -> str:
        return f"Developer({self.name}, {self.language})"


# Inheritance
class FullStackDeveloper(Developer):
    def __init__(self, name: str, years: int):
        super().__init__(name, "Full Stack", years)
        self.frontend = "React"
        self.backend = "Django"

    def stack_summary(self) -> str:
        return f"{self.frontend} + {self.backend}"


dev = FullStackDeveloper("Kushal", 3)
dev.add_project("SaaS Dashboard")
print(dev.experience_level)   # Mid-level
print(dev.stack_summary())    # React + Django`,
      },
      {
        type: "h2",
        text: "The Python Ecosystem: Libraries Worth Knowing",
      },
      {
        type: "ul",
        items: [
          "requests — HTTP requests (APIs, web scraping)",
          "django / fastapi — web frameworks for backends",
          "pandas / polars — data manipulation and analysis",
          "numpy — numerical computing",
          "pytest — testing your code properly",
          "pydantic — data validation and settings management",
          "celery — background tasks and queues",
          "sqlalchemy — database ORM for non-Django projects",
        ],
      },
      {
        type: "h2",
        text: "Your First Real Project: A GitHub Repository Fetcher",
      },
      {
        type: "p",
        text: "Enough theory. Let's build something. This project fetches a GitHub user's public repositories using the GitHub API, sorts them by stars, and displays a clean summary. It uses virtual environments, API calls, error handling, and data structures — all the fundamentals in one project.",
      },
      {
        type: "code",
        lang: "python",
        text: `import requests
import sys

def fetch_repos(username: str) -> list[dict]:
    url = f"https://api.github.com/users/{username}/repos"
    params = {"per_page": 100, "sort": "updated"}

    try:
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        if response.status_code == 404:
            print(f"User '{username}' not found.")
        else:
            print(f"API error: {e}")
        return []
    except requests.exceptions.ConnectionError:
        print("No internet connection.")
        return []

def display_repos(repos: list[dict]) -> None:
    if not repos:
        print("No repositories found.")
        return

    sorted_repos = sorted(repos, key=lambda r: r["stargazers_count"], reverse=True)

    print(f"\\n{'Name':<40} {'Stars':>6} {'Language':<15}")
    print("-" * 65)

    for repo in sorted_repos[:10]:
        name = repo["name"][:38]
        stars = repo["stargazers_count"]
        lang = repo.get("language") or "N/A"
        print(f"{name:<40} {stars:>6} {lang:<15}")

if __name__ == "__main__":
    username = sys.argv[1] if len(sys.argv) > 1 else "torvalds"
    repos = fetch_repos(username)
    display_repos(repos)`,
      },
      {
        type: "callout",
        variant: "info",
        text: "Run this with: python repos.py kushaldotel. This is a real, functional tool. Push it to GitHub — it's your first portfolio project.",
      },
      {
        type: "h2",
        text: "Where to Go Next",
      },
      {
        type: "ol",
        items: [
          "Complete Python.org's official tutorial (it's surprisingly good)",
          "Build 3 CLI tools before touching web frameworks",
          "Learn Django or FastAPI for web backends",
          "Read 'Fluent Python' by Luciano Ramalho (intermediate-advanced)",
          "Contribute to an open source Python project on GitHub",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "The single best thing you can do after this: open a terminal, type 'python', and start experimenting. The REPL is your playground. Every concept you've read here becomes real the moment you type it yourself.",
      },
    ],
  },

  {
    slug: "great-tech-life-in-bachelors",
    title: "How to Make the Most of Your Tech Degree: A Year-by-Year Playbook",
    excerpt:
      "Your bachelors degree is four years you won't get back. Most students waste them consuming theory without building anything. Here's the real playbook — what to do each year, how to build a portfolio that gets you hired, and how to avoid the traps that hold most CS graduates back.",
    category: "Career",
    tags: ["Career", "College", "Bachelors", "Tech Life", "Software Engineering"],
    readTime: "11 min read",
    publishedAt: "2025-05-05",
    gradient: "from-orange-500 to-pink-500",
    content: [
      {
        type: "p",
        text: "Every semester, thousands of students start a computer science or IT degree with high hopes. Four years later, a large fraction of them graduate with solid theory grades but zero real-world projects, no GitHub activity, and no idea what they want to build. Then they compete against bootcamp graduates who spent six months building apps. Don't be in that group. This guide is the playbook I wish I had on day one.",
      },
      {
        type: "h2",
        text: "The Mindset Shift That Changes Everything",
      },
      {
        type: "p",
        text: "The biggest mistake bachelors students make is treating their degree like school: attend lectures, study for exams, pass, repeat. That works for school. It does not work for tech careers. In tech, your portfolio matters more than your grades. Your GitHub profile gets more recruiter attention than your transcript. The projects you ship during your degree are the evidence that you can build things. Employers are not hiring your degree — they are hiring evidence of your ability.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "A 4.0 GPA with zero side projects will lose to a 3.0 GPA with three shipped projects in most software engineering interviews. Build things. That is the entire game.",
      },
      {
        type: "h2",
        text: "Year 1: Foundation and Exploration",
      },
      {
        type: "p",
        text: "Year 1 is about getting the fundamentals right without burning out. You're learning programming for the first time, figuring out how university works, and (if you're smart) starting to explore beyond the curriculum.",
      },
      {
        type: "h3",
        text: "What to focus on technically",
      },
      {
        type: "ul",
        items: [
          "Master one language deeply — Python is the best choice for most students",
          "Learn Git and GitHub from week one — version control is non-negotiable",
          "Understand algorithms and data structures (they matter for interviews)",
          "Build at least one personal project per semester, no matter how small",
          "Take CS50 (Harvard's free intro course) alongside your coursework — it's excellent",
        ],
      },
      {
        type: "h3",
        text: "What to do beyond the classroom",
      },
      {
        type: "p",
        text: "Join your college's programming club or tech community. If one doesn't exist, start one. These communities are where you'll find study partners, project collaborators, and eventually job referrals. The social layer of tech is just as important as the technical layer. Most people who get their first job through a referral got that referral because they showed up somewhere consistently.",
      },
      {
        type: "code",
        lang: "bash",
        text: `# Your Year 1 GitHub goal: 100+ commits
# Sample projects to build:
# 1. Command-line todo list (Python)
# 2. Simple web scraper for any site you use
# 3. Text-based quiz game
# These sound small. They are. Build them anyway.
# Small shipped > big unfinished.`,
      },
      {
        type: "h2",
        text: "Year 2: Specialise and Build Real Things",
      },
      {
        type: "p",
        text: "By year 2, you should have a working understanding of programming fundamentals. Now it's time to pick a direction and go deeper. The students who stand out in year 2 are the ones who stop doing toy problems and start building things with real users — even if those users are just their friends.",
      },
      {
        type: "h3",
        text: "Pick your direction (early is fine, you can change)",
      },
      {
        type: "ul",
        items: [
          "Web development — Django/FastAPI or Node.js backends, React frontend",
          "Mobile development — React Native or Flutter",
          "Data science / ML — pandas, numpy, scikit-learn, then PyTorch",
          "DevOps / cloud — Docker, AWS, CI/CD pipelines",
          "Cybersecurity — networking fundamentals, CTFs, ethical hacking",
        ],
      },
      {
        type: "p",
        text: "Don't agonise over this choice. Pick the one that excites you most right now and commit to it for 6 months. You can always pivot. What you cannot afford is to spend year 2 exploring five directions without going deep on any of them.",
      },
      {
        type: "h3",
        text: "Your first freelance client",
      },
      {
        type: "p",
        text: "Year 2 is when you're ready to take your first freelance project. This could be building a website for a local business, creating an automation script for a small company, or doing a data analysis project for someone. The amount of money is irrelevant — even NPR 5,000 matters. What matters is the experience of a real client, a real deadline, and a real deliverable. It forces you to produce something that works under real conditions, not just on your local machine.",
      },
      {
        type: "h2",
        text: "Year 3: Internship and Open Source",
      },
      {
        type: "p",
        text: "Year 3 is the most important year for your career trajectory. By now you have enough skill to contribute meaningfully to real codebases. The two highest-leverage activities you can do this year are: getting an internship and contributing to open source.",
      },
      {
        type: "h3",
        text: "Getting and maximising your internship",
      },
      {
        type: "p",
        text: "Internship applications for year 3 start early — often in the previous November and December. Start preparing in September. Polish your resume (one page, results-focused), build or update your GitHub, and practise data structure interview questions. When you get the internship, treat it like a 3-month interview. Ask good questions, ship whatever you're given on time, and build relationships with engineers. Most people get full-time offers from their internship company or through referrals from internship colleagues.",
      },
      {
        type: "h3",
        text: "Open source: the hidden career multiplier",
      },
      {
        type: "p",
        text: "Contributing to open source is one of the highest-leverage activities a student can do. It gives you a public record of code quality, collaboration, and communication that any employer can inspect. It's also how you learn to read large codebases — a skill that no tutorial teaches but every job requires. Start with good-first-issue labels on GitHub. Fix a bug in a library you use. Write a test. Add a documentation page. Small contributions still count, and they compound.",
      },
      {
        type: "code",
        lang: "bash",
        text: `# Finding open source issues to work on
# 1. Go to github.com/explore
# 2. Search: label:"good first issue" language:Python
# 3. Look for projects you actually use
# 4. Read CONTRIBUTING.md before doing anything
# 5. Comment on the issue before starting work`,
      },
      {
        type: "h2",
        text: "Year 4: Capstone, Job Search, and Your First Product",
      },
      {
        type: "p",
        text: "Final year is simultaneously the most stressful and the most interesting. You have the most skill you've ever had, a capstone project to complete, and a job search to navigate. Here's how to handle all three without losing your mind.",
      },
      {
        type: "h3",
        text: "Make your capstone project actually useful",
      },
      {
        type: "p",
        text: "Most capstone projects are academic exercises that get submitted, graded, and forgotten. Yours does not have to be. Pick a problem that real people have. Build a solution that real people could use. Deploy it publicly. Write about the architecture and decisions. This gives you a story to tell in interviews, a live demo to show, and potentially a real product. I've seen capstone projects become companies. It happens more than you think.",
      },
      {
        type: "h3",
        text: "The job search is a numbers game with quality constraints",
      },
      {
        type: "ul",
        items: [
          "Apply to 10–15 companies per week, not 2–3",
          "Tailor your resume to each job description (swap keywords, not entire resume)",
          "Leetcode: solve 50 Easy and 30 Medium problems before interviews",
          "System design basics: read 'Designing Data-Intensive Applications' (Kleppmann)",
          "Referrals convert 5–10x better than cold applications — use your network",
          "LinkedIn is where recruiters find you — keep it updated and active",
        ],
      },
      {
        type: "h2",
        text: "What Most Tech Degree Articles Won't Tell You",
      },
      {
        type: "h3",
        text: "Your mental health is load-bearing infrastructure",
      },
      {
        type: "p",
        text: "Burnout in tech is real, and it hits students hard. The culture of '10x developers' and grinding 16-hour days is glorified online and mostly fictional. Sustainable output over 4 years beats unsustainable sprints. Sleep matters for memory consolidation and problem-solving. Regular exercise significantly improves focus and mood. If you find yourself dreading coding, take a real break — not a 'I'll watch one YouTube video' break, but a genuine 2–3 day break. You'll return stronger.",
      },
      {
        type: "h3",
        text: "Teaching others is the fastest way to learn",
      },
      {
        type: "p",
        text: "Write blog posts. Make YouTube videos. Give talks at your college's tech club. Explain concepts to classmates who are struggling. Every time you explain something, you find the gaps in your own understanding. The Feynman technique — teach it simply or admit you don't really know it — is the most effective learning method I've found. And the side effect is that you build a public presence that makes you easier to hire.",
      },
      {
        type: "callout",
        variant: "tip",
        text: "Start a blog during your bachelors. Write about what you're learning, what you built, what failed. Even 5 posts will make you stand out. Most engineers never write publicly. The few who do get opportunities that never reach the rest.",
      },
    ],
  },

  {
    slug: "django-internal-working",
    title: "Inside Django: How the Framework Actually Works Under the Hood",
    excerpt:
      "Most Django tutorials teach you what to type. This guide teaches you what happens when you type it — the request lifecycle, the ORM internals, middleware, signals, and why Django makes the architectural decisions it does.",
    category: "Backend",
    tags: ["Django", "Python", "Web Framework", "Backend", "Architecture"],
    readTime: "13 min read",
    publishedAt: "2025-05-10",
    gradient: "from-green-600 to-emerald-400",
    content: [
      {
        type: "p",
        text: "Django has a reputation for being 'magic'. You define a model, run migrations, and suddenly have a database table. You write a URL pattern, a view function, and a template, and somehow an HTTP request becomes a rendered HTML page. This magic is not magic — it's carefully designed architecture. Understanding it makes you a significantly better Django developer, because you stop fighting the framework and start working with it.",
      },
      {
        type: "h2",
        text: "Django's Philosophy: Batteries Included, Opinionated by Design",
      },
      {
        type: "p",
        text: "Django was created at a newspaper company (the Lawrence Journal-World) by developers who needed to ship web applications fast. Its philosophy is pragmatism over purity. It ships with an ORM, an admin panel, authentication, forms, and templating — everything you need to build a real web application without assembling a stack from scratch. The opinionated conventions it enforces (MTV architecture, specific project structure, explicit app boundaries) exist because consistency at scale saves enormous amounts of time.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Django follows the MTV pattern: Model (data layer), Template (presentation layer), View (business logic layer). This differs from MVC only in naming — 'View' in Django is what 'Controller' is in MVC, and 'Template' is what 'View' is in MVC.",
      },
      {
        type: "h2",
        text: "The Request Lifecycle: From Browser to Response",
      },
      {
        type: "p",
        text: "When a user makes an HTTP request to a Django application, the request travels through a carefully ordered pipeline before a response is returned. Understanding this pipeline is fundamental to debugging, performance optimisation, and security.",
      },
      {
        type: "ol",
        items: [
          "WSGI/ASGI server receives the raw HTTP request (Gunicorn, uvicorn)",
          "Django's WSGIHandler or ASGIHandler converts it to a HttpRequest object",
          "Request middleware processes the request (authentication, CORS, etc.)",
          "URL dispatcher (URLconf) matches the path to a view function",
          "View middleware runs before the view is called",
          "The view function executes (queries DB, processes data, renders template)",
          "Response middleware processes the outgoing response",
          "WSGI server sends the HTTP response back to the client",
        ],
      },
      {
        type: "code",
        lang: "python",
        text: `# Django's entry point — wsgi.py
import django
from django.core.handlers.wsgi import WSGIHandler

# When a request arrives, it flows through:
# WSGIHandler.__call__(environ, start_response)
#   -> request = WSGIRequest(environ)
#   -> response = self.get_response(request)
#      -> middleware chain (process_request)
#      -> URL resolver: url_resolver.resolve(request.path_info)
#      -> view function called with (request, *args, **kwargs)
#      -> middleware chain (process_response)
#   -> return response`,
      },
      {
        type: "h2",
        text: "The URL Dispatcher: How Django Routes Requests",
      },
      {
        type: "p",
        text: "Django's URL dispatcher is a two-step process: first it loads the ROOT_URLCONF module (typically yourproject/urls.py), then it walks through the URL patterns in order until it finds a match. This is O(n) in the worst case, but patterns are compiled to regex once at startup and cached, making routing fast in practice.",
      },
      {
        type: "code",
        lang: "python",
        text: `# urls.py — the URL configuration
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include("api.urls")),
    path("blog/", include("blog.urls")),
    path("", include("core.urls")),
]

# blog/urls.py
from django.urls import path
from . import views

app_name = "blog"  # namespace for reverse URL lookup

urlpatterns = [
    path("", views.PostListView.as_view(), name="list"),
    path("<slug:slug>/", views.PostDetailView.as_view(), name="detail"),
    path("tag/<str:tag>/", views.TagPostsView.as_view(), name="tag"),
]

# In a template or view:
# reverse("blog:detail", kwargs={"slug": "django-internals"})`,
      },
      {
        type: "h2",
        text: "Views: Function-Based vs Class-Based",
      },
      {
        type: "p",
        text: "Django supports two view styles. Function-Based Views (FBVs) are simple Python functions. Class-Based Views (CBVs) are Python classes that provide built-in mixins for common patterns like list views, detail views, and form handling. Neither is universally superior — FBVs are more explicit and easier to understand; CBVs eliminate boilerplate for standard CRUD operations.",
      },
      {
        type: "code",
        lang: "python",
        text: `from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Post

# --- Function-Based View ---
def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug, status="published")
    context = {
        "post": post,
        "related": Post.objects.filter(
            tags__in=post.tags.all()
        ).exclude(id=post.id)[:3],
    }
    return render(request, "blog/post_detail.html", context)

# --- Class-Based View (equivalent) ---
class PostDetailView(DetailView):
    model = Post
    template_name = "blog/post_detail.html"
    slug_field = "slug"
    slug_url_kwarg = "slug"
    queryset = Post.objects.filter(status="published")

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["related"] = Post.objects.filter(
            tags__in=self.object.tags.all()
        ).exclude(id=self.object.id)[:3]
        return context`,
      },
      {
        type: "h2",
        text: "The ORM: Django's Most Powerful and Most Misunderstood Layer",
      },
      {
        type: "p",
        text: "Django's ORM (Object-Relational Mapper) translates Python class definitions into database tables and Python method calls into SQL queries. It's one of the most complete ORMs in any language, but it has subtleties that trip up developers who treat it as a magic box.",
      },
      {
        type: "h3",
        text: "QuerySets are lazy",
      },
      {
        type: "p",
        text: "The most important thing to understand about Django's ORM is that QuerySets do not hit the database until they are evaluated. This means you can chain filters, annotations, and orderings without causing multiple database queries. The query is only executed when you iterate, slice, call len(), or convert to a list.",
      },
      {
        type: "code",
        lang: "python",
        text: `# This does NOT hit the database
posts = Post.objects.filter(status="published")
posts = posts.order_by("-created_at")
posts = posts.select_related("author")   # JOIN on author table
posts = posts.prefetch_related("tags")   # separate query for M2M

# Database is hit HERE (evaluation):
for post in posts:                       # iteration
    print(post.title)

# Or here:
count = posts.count()                    # SELECT COUNT(*)
first = posts.first()                    # SELECT ... LIMIT 1
post_list = list(posts)                  # evaluate all

# N+1 problem (WRONG — triggers N queries):
posts = Post.objects.all()
for post in posts:
    print(post.author.name)   # separate query per post!

# Fixed with select_related:
posts = Post.objects.select_related("author").all()
for post in posts:
    print(post.author.name)   # single JOIN query`,
      },
      {
        type: "h3",
        text: "Model internals: how fields become columns",
      },
      {
        type: "code",
        lang: "python",
        text: `from django.db import models
from django.utils.text import slugify

class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    content = models.TextField()
    author = models.ForeignKey(
        "auth.User",
        on_delete=models.CASCADE,
        related_name="posts",
    )
    tags = models.ManyToManyField("Tag", blank=True)
    status = models.CharField(
        max_length=10,
        choices=[("draft", "Draft"), ("published", "Published")],
        default="draft",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["status", "created_at"]),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title`,
      },
      {
        type: "h2",
        text: "Middleware: The Interceptor Pipeline",
      },
      {
        type: "p",
        text: "Middleware is a series of hooks that process every request and response that flows through your application. It's where cross-cutting concerns live: authentication, CORS headers, security headers, session handling, and request logging. Django's middleware executes as a stack: on the way in (request), middleware runs top-to-bottom. On the way out (response), it runs bottom-to-top.",
      },
      {
        type: "code",
        lang: "python",
        text: `# Writing custom middleware
import time
import logging

logger = logging.getLogger(__name__)

class RequestTimingMiddleware:
    """Logs the time taken for every request."""

    def __init__(self, get_response):
        self.get_response = get_response
        # One-time setup on server startup

    def __call__(self, request):
        start = time.perf_counter()

        # Code before the view
        response = self.get_response(request)
        # Code after the view

        duration_ms = (time.perf_counter() - start) * 1000
        logger.info(
            "%s %s %.2fms %d",
            request.method,
            request.path,
            duration_ms,
            response.status_code,
        )
        response["X-Request-Duration"] = f"{duration_ms:.2f}ms"
        return response

# settings.py
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "yourapp.middleware.RequestTimingMiddleware",  # add here
    "django.contrib.sessions.middleware.SessionMiddleware",
    # ...
]`,
      },
      {
        type: "h2",
        text: "Signals: Decoupled Event Handling",
      },
      {
        type: "p",
        text: "Django signals allow decoupled applications to get notified when certain actions occur elsewhere in the framework. The most common use cases are post_save (sending a welcome email after a user registers), pre_delete (cleaning up files when a record is deleted), and m2m_changed (updating caches when many-to-many relationships change).",
      },
      {
        type: "code",
        lang: "python",
        text: `from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import UserProfile
from .tasks import send_welcome_email

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """Auto-create a UserProfile when a User is created."""
    if created:
        UserProfile.objects.create(user=instance)
        # Fire background task (Celery)
        send_welcome_email.delay(instance.email)

# Register signals in apps.py — don't use AppConfig.ready():
class UsersConfig(AppConfig):
    name = "users"

    def ready(self):
        import users.signals  # noqa — imports signal handlers`,
      },
      {
        type: "callout",
        variant: "warning",
        text: "Signals introduce implicit coupling. If you overuse them, your codebase becomes hard to trace — an action in one module causes unexpected side effects elsewhere. Use signals for truly decoupled concerns (like sending emails) and prefer direct function calls for business logic within the same app.",
      },
      {
        type: "h2",
        text: "Django Admin: More Than a Debug Tool",
      },
      {
        type: "p",
        text: "Django's admin interface is often dismissed as a quick debug tool, but for internal tools and content management, it's production-ready with customisation. You can override list displays, add custom actions, inline related models, and apply custom filters with relatively little code.",
      },
      {
        type: "code",
        lang: "python",
        text: `from django.contrib import admin
from django.utils.html import format_html
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["title", "author", "status", "status_badge", "created_at"]
    list_filter = ["status", "created_at", "author"]
    search_fields = ["title", "content", "author__username"]
    prepopulated_fields = {"slug": ("title",)}
    raw_id_fields = ["author"]          # better for large user tables
    date_hierarchy = "created_at"
    save_on_top = True

    def status_badge(self, obj):
        colour = "green" if obj.status == "published" else "orange"
        return format_html(
            '<span style="color: {};">{}</span>',
            colour,
            obj.get_status_display(),
        )
    status_badge.short_description = "Status"

    actions = ["publish_posts"]

    def publish_posts(self, request, queryset):
        updated = queryset.update(status="published")
        self.message_user(request, f"{updated} posts published.")
    publish_posts.short_description = "Publish selected posts"`,
      },
    ],
  },

  {
    slug: "deploying-applications-cloud-aws-gcp",
    title: "Deploy Your App to AWS and GCP: A Practical Guide for Developers",
    excerpt:
      "Local development is easy. Production is where real learning happens. This guide covers deploying web applications on AWS and GCP — from EC2 and Cloud Run to databases, storage, SSL, and CI/CD pipelines that actually work.",
    category: "DevOps",
    tags: ["AWS", "GCP", "Cloud", "DevOps", "Deployment", "Docker"],
    readTime: "14 min read",
    publishedAt: "2025-05-14",
    gradient: "from-slate-700 to-blue-600",
    content: [
      {
        type: "p",
        text: "At some point, every developer faces the same moment: the app works perfectly on localhost, and now it needs to run for real users, all the time, without your laptop. Cloud deployment is the bridge between a side project and a real product. This guide covers both AWS and GCP — the two platforms you'll encounter most in the industry — with practical, copy-pasteable configurations rather than marketing slides.",
      },
      {
        type: "h2",
        text: "Why Cloud Over Traditional Hosting?",
      },
      {
        type: "p",
        text: "Traditional VPS hosting (DigitalOcean Droplets, Linode VMs) is still a valid option for small applications. But cloud platforms offer something traditional hosting doesn't: managed services. Instead of setting up and maintaining a PostgreSQL server yourself, you use RDS (AWS) or Cloud SQL (GCP) — the database is patched, backed up, and replicated automatically. Instead of configuring a load balancer, you use AWS ALB or GCP Load Balancer. Managed services have a cost premium but they trade money for operational complexity.",
      },
      {
        type: "ul",
        items: [
          "Auto-scaling: handle traffic spikes without pre-provisioning",
          "Managed databases: backups, replication, and patching handled for you",
          "Global CDN: serve static files from edge locations worldwide",
          "IAM: fine-grained access control for every resource",
          "Pay-as-you-go: no hardware costs, idle resources cost nothing",
        ],
      },
      {
        type: "h2",
        text: "Containerise First: Docker Is the Foundation",
      },
      {
        type: "p",
        text: "Before deploying to any cloud, containerise your application. Docker packages your app and all its dependencies into a single portable image. This eliminates 'works on my machine' problems and makes deployment consistent across environments. Both AWS and GCP have first-class Docker support.",
      },
      {
        type: "code",
        lang: "dockerfile",
        text: `# Dockerfile for a Django application
FROM python:3.12-slim

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    libpq-dev gcc \\
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

EXPOSE 8000

# Use gunicorn for production
CMD ["gunicorn", "myproject.wsgi:application", \\
     "--bind", "0.0.0.0:8000", \\
     "--workers", "4", \\
     "--worker-class", "gthread", \\
     "--threads", "2", \\
     "--timeout", "120"]`,
      },
      {
        type: "code",
        lang: "yaml",
        text: `# docker-compose.yml for local development
version: "3.9"

services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
    environment:
      - DEBUG=True
      - DATABASE_URL=postgres://postgres:password@db:5432/myapp
    depends_on:
      - db
      - redis

  db:
    image: postgres:16
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

volumes:
  postgres_data:`,
      },
      {
        type: "h2",
        text: "AWS Deployment: EC2 with Nginx and Gunicorn",
      },
      {
        type: "p",
        text: "EC2 (Elastic Compute Cloud) is AWS's virtual machine service. For a typical web application, the deployment stack is: EC2 instance running your app (via Docker/Gunicorn) behind an Nginx reverse proxy, with an RDS PostgreSQL database and S3 for static/media files.",
      },
      {
        type: "h3",
        text: "Step 1: Launch an EC2 instance",
      },
      {
        type: "ol",
        items: [
          "Go to EC2 Dashboard → Launch Instance",
          "Choose Amazon Linux 2023 or Ubuntu 22.04",
          "Select t3.small (2GB RAM) minimum for a real app",
          "Create a key pair (.pem file) and download it",
          "Configure security group: allow port 80 (HTTP), 443 (HTTPS), 22 (SSH from your IP only)",
          "Launch and note the public IP",
        ],
      },
      {
        type: "code",
        lang: "bash",
        text: `# Connect to your EC2 instance
chmod 400 my-key.pem
ssh -i my-key.pem ec2-user@YOUR_EC2_PUBLIC_IP

# Install Docker
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone your repo and deploy
git clone https://github.com/yourname/yourapp.git
cd yourapp
cp .env.example .env   # fill in production values
docker-compose -f docker-compose.prod.yml up -d`,
      },
      {
        type: "h3",
        text: "Nginx as reverse proxy",
      },
      {
        type: "code",
        lang: "nginx",
        text: `# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS (after SSL setup)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    client_max_body_size 20M;

    location /static/ {
        alias /app/staticfiles/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 120s;
    }
}`,
      },
      {
        type: "h2",
        text: "AWS RDS: Managed PostgreSQL",
      },
      {
        type: "p",
        text: "Never run your production database on the same EC2 instance as your application. Use RDS — it handles automated backups, failover, and security patches. Set it up in the same VPC as your EC2 instance so traffic stays private.",
      },
      {
        type: "code",
        lang: "bash",
        text: `# RDS setup via AWS CLI
aws rds create-db-instance \\
  --db-instance-identifier myapp-prod \\
  --db-instance-class db.t3.micro \\
  --engine postgres \\
  --engine-version 16.1 \\
  --master-username dbadmin \\
  --master-user-password YourStrongPassword \\
  --allocated-storage 20 \\
  --vpc-security-group-ids sg-xxxxxxxx \\
  --db-subnet-group-name myapp-subnet-group \\
  --backup-retention-period 7 \\
  --no-publicly-accessible

# In your Django settings:
# DATABASE_URL=postgres://dbadmin:password@your-rds-endpoint.rds.amazonaws.com:5432/myapp`,
      },
      {
        type: "h2",
        text: "GCP: Cloud Run for Serverless Container Deployment",
      },
      {
        type: "p",
        text: "Google Cloud Run is serverless — you deploy a Docker container and GCP handles scaling from zero to thousands of requests automatically. You pay only for the time your container is actually handling requests. For most web applications, Cloud Run is simpler, cheaper, and faster to deploy than EC2.",
      },
      {
        type: "code",
        lang: "bash",
        text: `# Install and authenticate gcloud CLI
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Build and push container to Google Container Registry
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/myapp

# Deploy to Cloud Run
gcloud run deploy myapp \\
  --image gcr.io/YOUR_PROJECT_ID/myapp \\
  --platform managed \\
  --region us-central1 \\
  --allow-unauthenticated \\
  --port 8000 \\
  --memory 512Mi \\
  --cpu 1 \\
  --min-instances 0 \\
  --max-instances 10 \\
  --set-env-vars="DATABASE_URL=postgres://...,SECRET_KEY=...,DEBUG=False"

# Cloud Run gives you a URL like:
# https://myapp-xxxxxxxx-uc.a.run.app`,
      },
      {
        type: "h2",
        text: "CI/CD with GitHub Actions: Automate Everything",
      },
      {
        type: "p",
        text: "Manually SSH-ing into a server to deploy is not a production process. Automate your deployments with GitHub Actions — every push to main triggers a build, test, and deploy pipeline.",
      },
      {
        type: "code",
        lang: "yaml",
        text: "# .github/workflows/deploy.yml\nname: Deploy to Cloud Run\n\non:\n  push:\n    branches: [main]\n\nenv:\n  PROJECT_ID: ${{ secrets.GCP_PROJECT_ID }}\n  SERVICE: myapp\n  REGION: us-central1\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n      - run: pip install -r requirements.txt\n      - run: python manage.py test\n\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - id: auth\n        uses: google-github-actions/auth@v2\n        with:\n          credentials_json: ${{ secrets.GCP_SA_KEY }}\n\n      - uses: google-github-actions/setup-gcloud@v2\n\n      - name: Build and push Docker image\n        run: |\n          gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE\n\n      - name: Deploy to Cloud Run\n        run: |\n          gcloud run deploy $SERVICE \\\\\n            --image gcr.io/$PROJECT_ID/$SERVICE \\\\\n            --platform managed \\\\\n            --region $REGION \\\\\n            --quiet",
      },
      {
        type: "callout",
        variant: "tip",
        text: "Store all secrets (database passwords, API keys, SECRET_KEY) in GitHub Secrets or GCP Secret Manager — never in your code or environment files committed to git. Use python-decouple or pydantic-settings to load them at runtime.",
      },
      {
        type: "h2",
        text: "Cost Optimisation: Running on a Budget",
      },
      {
        type: "ul",
        items: [
          "Use Cloud Run (GCP) or Lambda (AWS) for low-traffic apps — pay per request, not per hour",
          "Set up billing alerts at $10, $50, and $100 thresholds so surprises don't happen",
          "Use db.t3.micro RDS for dev/staging; upgrade only when you have real load",
          "Enable S3 Intelligent-Tiering for media files to automatically reduce storage costs",
          "Use reserved instances or committed use discounts when traffic is predictable",
          "Delete unused resources — old snapshots, stopped instances, and idle load balancers all cost money",
        ],
      },
    ],
  },

  {
    slug: "create-and-distribute-saas-app",
    title: "From Zero to Paying Users: How to Build and Distribute a SaaS Product",
    excerpt:
      "Most SaaS tutorials teach you to build. This one teaches you to ship, to get users, and to get paid. From finding a problem worth solving to your first 100 paying customers — this is the complete operational guide.",
    category: "Product",
    tags: ["SaaS", "Product", "Startup", "Stripe", "Distribution"],
    readTime: "13 min read",
    publishedAt: "2025-05-18",
    gradient: "from-violet-600 to-purple-400",
    content: [
      {
        type: "p",
        text: "The internet is full of SaaS tutorials that show you how to build a subscription form and integrate Stripe. That part is actually the easy part. The hard part — and the part almost nobody writes about honestly — is getting from zero to a product that real people pay for. This guide covers the full journey: finding a problem, building the right MVP, and distributing your product to reach actual users.",
      },
      {
        type: "h2",
        text: "The Problem with Most SaaS Ideas",
      },
      {
        type: "p",
        text: "Most failed SaaS products fail before they're ever built. Founders pick ideas they personally find interesting rather than ideas that solve a problem other people are actively experiencing and willing to pay to solve. The filter is: would someone pay for this today, even if it was ugly and manual? If the answer is no, the SaaS version won't change that. If the answer is yes, you have a foundation.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "Never build a SaaS product for a problem you assume exists. Validate with real conversations first. Talk to 10 potential users before writing a single line of code. Ask them what tools they use today, what's painful, and what they'd pay to fix. Their words become your landing page copy.",
      },
      {
        type: "h3",
        text: "Finding problems worth solving",
      },
      {
        type: "ul",
        items: [
          "Solve a problem you personally have (best signal — you are the user)",
          "Look at Reddit/Hacker News 'Ask HN: What do you wish existed?' threads",
          "Find spreadsheet workflows — anything done in Excel is a potential SaaS",
          "Look at App Store reviews of existing tools — the complaints are feature requests",
          "Find markets where incumbents are old, expensive, and not developer-friendly",
          "Talk to small businesses — they have more pain and fewer solutions than consumers",
        ],
      },
      {
        type: "h2",
        text: "Choosing Your Tech Stack for SaaS",
      },
      {
        type: "p",
        text: "The best tech stack for a SaaS is the one you can ship fastest with. That said, some choices compound favourably for SaaS specifically.",
      },
      {
        type: "h3",
        text: "Recommended stack (opinionated but battle-tested)",
      },
      {
        type: "ul",
        items: [
          "Frontend: Next.js (React) — server-side rendering, file-based routing, great for SEO",
          "Backend: Django REST Framework or FastAPI (Python) or Next.js API routes",
          "Database: PostgreSQL (always) — row-level security, full-text search, JSONB fields",
          "Auth: Clerk or NextAuth.js — handling auth yourself is a week lost",
          "Billing: Stripe — the standard. Paddle is good for international tax handling",
          "Email: Resend or AWS SES — transactional emails done right",
          "Cloud: Vercel (frontend) + Railway or Render (backend) for fastest deployment",
          "Monitoring: Sentry for errors, PostHog for product analytics",
        ],
      },
      {
        type: "h2",
        text: "Building the MVP: What to Include and What to Cut",
      },
      {
        type: "p",
        text: "An MVP (Minimum Viable Product) is not a half-built product. It is the smallest complete experience that delivers real value to a real user. The mistake most developers make is building too many features before getting feedback. A focused MVP should be completable in 3–4 weeks of solo development.",
      },
      {
        type: "h3",
        text: "Non-negotiables in every SaaS MVP",
      },
      {
        type: "ul",
        items: [
          "Authentication (sign up, log in, reset password)",
          "The core feature — the single thing that solves the stated problem",
          "A working payment flow (even if it's just one pricing tier)",
          "Basic email notifications (welcome email, billing receipt)",
          "A contact/support email address — real user trust signal",
        ],
      },
      {
        type: "h3",
        text: "What to defer post-launch",
      },
      {
        type: "ul",
        items: [
          "Teams and multi-user features",
          "Advanced settings and customisation",
          "API access",
          "Mobile app",
          "Integrations and webhooks",
          "Admin dashboard and reporting",
        ],
      },
      {
        type: "h2",
        text: "Authentication and Billing: The Technical Foundation",
      },
      {
        type: "code",
        lang: "typescript",
        text: `// Using Clerk for authentication in Next.js
// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

// Protecting a route
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  // render dashboard
}`,
      },
      {
        type: "code",
        lang: "typescript",
        text: `// Stripe billing — creating a checkout session
import Stripe from "stripe";
import { auth } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { userId, user } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const session = await stripe.checkout.sessions.create({
    customer_email: user?.emailAddresses[0]?.emailAddress,
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID,  // monthly plan price ID
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: \`\${process.env.NEXT_PUBLIC_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_URL}/pricing\`,
    metadata: { userId },
  });

  return Response.json({ url: session.url });
}`,
      },
      {
        type: "code",
        lang: "typescript",
        text: `// Stripe webhook — handling subscription events
import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      // Mark user as subscribed in your database
      await db.user.update({
        where: { id: session.metadata!.userId },
        data: { subscribed: true, stripeCustomerId: session.customer as string },
      });
      break;

    case "customer.subscription.deleted":
      // Revoke access
      break;
  }

  return new Response("OK");
}`,
      },
      {
        type: "h2",
        text: "The Landing Page: Your Most Important Engineering Decision",
      },
      {
        type: "p",
        text: "Most developers treat the landing page as an afterthought. It is not. Your landing page is where every potential customer forms their first impression and makes the decision to sign up or leave. A bad landing page will kill a good product. The elements that convert are not clever design — they are clarity.",
      },
      {
        type: "ol",
        items: [
          "Above the fold: one clear sentence explaining what you do and who it's for",
          "Social proof: logos, testimonials, or user count (even 50 users is worth showing)",
          "Demo: a GIF, video, or interactive preview — let people see it before signing up",
          "Pricing: be transparent. Hidden pricing erodes trust immediately",
          "One CTA: 'Start free trial' or 'Get started free' — not five different calls to action",
          "FAQ: answer the objections before they become reasons not to sign up",
        ],
      },
      {
        type: "h2",
        text: "Distribution: Getting Your First 100 Users",
      },
      {
        type: "p",
        text: "No one will use your product if they don't know it exists. Distribution is the part that most technical founders underinvest in, because it's uncomfortable. You have to put your work in front of people and ask for their opinion. Here's where to find your first 100 users.",
      },
      {
        type: "h3",
        text: "Channels that work for first users",
      },
      {
        type: "ul",
        items: [
          "Post in communities where your target users are: Reddit, Slack groups, Discord servers, Facebook groups",
          "Direct outreach: find 50 people on LinkedIn or Twitter who match your ideal user profile and message them personally",
          "Product Hunt launch: prepare for 2 weeks, post at midnight PST on Tuesday, and ask everyone you know to upvote",
          "Hacker News Show HN: 'Show HN: I built X to solve Y' — this community is technical and honest",
          "Build in public on Twitter/X: share weekly updates of what you're building and learning",
          "Create free content that ranks: write a blog post solving a problem your target user has, mention your product at the end",
        ],
      },
      {
        type: "h3",
        text: "Going from 100 to 1,000 users",
      },
      {
        type: "p",
        text: "The jump from 100 to 1,000 users requires a repeatable acquisition channel — something that keeps working without constant effort. The best options for early-stage SaaS are SEO (content that ranks), a referral programme (users invite users), and partnerships with complementary tools. Pick one channel, commit to it for 90 days, and measure. Don't switch channels every two weeks based on what you read on Twitter.",
      },
      {
        type: "h2",
        text: "Metrics That Actually Matter Early On",
      },
      {
        type: "ul",
        items: [
          "MRR (Monthly Recurring Revenue) — the only revenue number that matters for SaaS",
          "Churn rate — what percentage of users cancel each month. Anything above 5% monthly is a retention problem",
          "Activation rate — what percentage of signups actually use the core feature. Low activation means your onboarding is broken",
          "NPS (Net Promoter Score) — ask users 'How likely are you to recommend us?' regularly",
          "Time to value — how long does it take a new user to experience the core benefit?",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Talk to every churned user. Send a personal email within 24 hours of cancellation asking one question: 'What could we have done differently?' The answers will tell you more than any analytics dashboard. Most founders never do this. The ones who do build much better products.",
      },
      {
        type: "h2",
        text: "The Things Nobody Tells You",
      },
      {
        type: "p",
        text: "Building a SaaS product is a marathon that feels like a sprint. Most products that eventually succeed went through a period of almost zero growth for months. The winners are the people who kept shipping, kept talking to users, and kept iterating. The product you launch will bear almost no resemblance to the product that finds product-market fit. That is not failure — that is the process. Validate fast, build focused, and talk to your users every single week.",
      },
    ],
  },
];
