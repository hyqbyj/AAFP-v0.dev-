import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "AI驱动的CRM如何提升客户满意度",
    excerpt: "探索人工智能如何改变客户关系管理，提供个性化体验，提高客户满意度和忠诚度。",
    image: "/images/blog-1.png",
    category: "CRM",
    date: "2023-06-15",
    author: "张明",
    authorImage: "/images/author-1.png",
  },
  {
    id: 2,
    title: "数据驱动决策：从数据到洞察的转变",
    excerpt: "了解如何利用高级数据分析工具，将原始数据转化为有价值的业务洞察，指导战略决策。",
    image: "/images/blog-2.png",
    category: "数据分析",
    date: "2023-06-10",
    author: "李婷",
    authorImage: "/images/author-2.png",
  },
  {
    id: 3,
    title: "邮件营销自动化：提高效率与转化率",
    excerpt: "探索邮件营销自动化的最佳实践，如何设计有效的自动化流程，提高营销效率和转化率。",
    image: "/images/blog-3.png",
    category: "邮件营销",
    date: "2023-06-05",
    author: "王强",
    authorImage: "/images/author-3.png",
  },
  {
    id: 4,
    title: "B2B企业如何利用AI提升销售效率",
    excerpt: "探讨B2B企业如何利用人工智能技术优化销售流程，提高团队效率，缩短销售周期。",
    image: "/images/blog-4.png",
    category: "AI应用",
    date: "2023-05-28",
    author: "陈静",
    authorImage: "/images/author-4.png",
  },
  {
    id: 5,
    title: "客户数据安全：最佳实践与合规指南",
    excerpt: "了解保护客户数据安全的最佳实践，以及如何确保您的数据处理符合GDPR、CCPA等法规要求。",
    image: "/images/blog-5.png",
    category: "数据安全",
    date: "2023-05-20",
    author: "赵伟",
    authorImage: "/images/author-5.png",
  },
  {
    id: 6,
    title: "构建高效的全渠道营销策略",
    excerpt: "学习如何整合各种营销渠道，创建一致的品牌体验，最大化营销效果和投资回报率。",
    image: "/images/blog-6.png",
    category: "营销策略",
    date: "2023-05-15",
    author: "林小红",
    authorImage: "/images/author-6.png",
  },
]

const categories = ["全部", "CRM", "数据分析", "邮件营销", "AI应用", "数据安全", "营销策略"]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">AAFB博客</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  探索最新的CRM、数据分析和营销趋势，获取专家洞察和最佳实践
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="搜索文章..." className="w-full bg-white pl-8 shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-6 md:py-8 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category, index) => (
                <Link key={index} href={`/resources/blog/category/${category}`}>
                  <Badge
                    variant={index === 0 ? "default" : "outline"}
                    className={index === 0 ? "bg-purple-600" : "hover:bg-purple-50"}
                  >
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/featured-blog.png"
                    alt="AI驱动的CRM如何提升客户满意度"
                    width={600}
                    height={400}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <Badge className="bg-purple-600 mb-2">精选文章</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI驱动的CRM如何提升客户满意度</h2>
                  <p className="text-muted-foreground mt-2">2023-06-15 · 张明</p>
                </div>
                <p className="text-muted-foreground">
                  在当今竞争激烈的商业环境中，客户满意度已成为企业成功的关键指标。传统的客户关系管理(CRM)系统虽然能够存储和管理客户数据，但往往缺乏深度洞察和个性化能力。人工智能(AI)的引入正在彻底改变CRM领域，为企业提供了前所未有的客户洞察和个性化服务能力。
                </p>
                <div>
                  <Link href="/resources/blog/posts/1">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      阅读全文
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">最新文章</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  探索我们的最新文章，获取行业洞察和专业建议
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/resources/blog/posts/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={`/images/blog-${post.id <= 6 ? post.id : (post.id % 6) + 1}.png`}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                          <Image
                            src={`/images/author-${post.id <= 6 ? post.id : (post.id % 6) + 1}.png`}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline">
                加载更多文章
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">订阅我们的通讯</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  定期获取最新的行业洞察、最佳实践和AAFB产品更新
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="flex space-x-2">
                  <Input type="email" placeholder="您的邮箱地址" className="flex-1" />
                  <Button className="bg-purple-600 hover:bg-purple-700">订阅</Button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">我们尊重您的隐私，不会向第三方分享您的信息。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
