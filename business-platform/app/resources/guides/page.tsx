import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Download, Search } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const guides = [
  {
    id: 1,
    title: "B2B营销完全指南：策略、渠道和最佳实践",
    excerpt: "深入探讨B2B营销的关键策略和最佳实践，帮助您设计有效的营销计划，提高ROI。",
    image: "/images/guide-1.png",
    category: "营销策略",
    pagesCount: 45,
    downloadCount: 3250,
  },
  {
    id: 2,
    title: "数据驱动决策：从数据收集到业务洞察",
    excerpt: "学习如何有效收集、分析和解读数据，做出明智的业务决策，提高运营效率和盈利能力。",
    image: "/images/guide-2.png",
    category: "数据分析",
    pagesCount: 38,
    downloadCount: 2870,
  },
  {
    id: 3,
    title: "客户关系管理实用手册：构建长期客户忠诚度",
    excerpt: "探索CRM的核心原则和策略，学习如何建立和维护强大的客户关系，提高客户满意度和忠诚度。",
    image: "/images/guide-3.png",
    category: "客户管理",
    pagesCount: 42,
    downloadCount: 4120,
  },
  {
    id: 4,
    title: "人工智能营销：革新您的业务增长策略",
    excerpt: "深入了解AI如何改变营销格局，以及如何利用AI技术优化营销活动，提高效率和效果。",
    image: "/images/guide-4.png",
    category: "AI应用",
    pagesCount: 50,
    downloadCount: 5680,
  },
  {
    id: 5,
    title: "SaaS增长策略：从获客到留存的完整路径",
    excerpt: "探讨SaaS企业的增长策略，包括获客、激活、留存和扩展销售的全面方法和技巧。",
    image: "/images/guide-5.png",
    category: "SaaS策略",
    pagesCount: 48,
    downloadCount: 3960,
  },
  {
    id: 6,
    title: "内容营销手册：创建有影响力的B2B内容",
    excerpt: "学习如何创建能够吸引、教育和转化B2B受众的高质量内容，建立品牌权威和信任。",
    image: "/images/guide-6.png",
    category: "内容营销",
    pagesCount: 40,
    downloadCount: 3450,
  },
]

const categories = ["全部", "营销策略", "数据分析", "客户管理", "AI应用", "SaaS策略", "内容营销"]

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">指南与电子书</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  探索我们的深度行业指南和电子书，获取专业知识和最佳实践
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="搜索指南和电子书..." className="w-full bg-white pl-8 shadow-sm" />
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
                <Link key={index} href={`/resources/guides/category/${category}`}>
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

        {/* Featured Guide */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/featured-guide.png"
                    alt="AI营销指南"
                    width={600}
                    height={400}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <Badge className="bg-purple-600 mb-2">精选指南</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    人工智能营销：革新您的业务增长策略
                  </h2>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>50页</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>5,680次下载</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  人工智能正在彻底改变营销领域，为企业提供了前所未有的洞察和自动化能力。本指南深入探讨了AI在营销中的应用，包括客户细分、内容创建、个性化推荐和预测分析等。了解如何利用AI技术优化您的营销策略，提高效率并实现业务增长。
                </p>
                <div>
                  <Link href="/resources/guides/download/4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      下载指南
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">最新指南与电子书</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  探索我们的最新指南，获取行业洞察和专业建议
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
              {guides.map((guide) => (
                <Link key={guide.id} href={`/resources/guides/download/${guide.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={guide.image || "/placeholder.svg"}
                        alt={guide.title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{guide.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{guide.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-1">
                      <CardDescription className="line-clamp-3">{guide.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 border-t mt-auto">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{guide.pagesCount}页</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Download className="h-4 w-4 mr-1" />
                          <span>{guide.downloadCount.toLocaleString()}次下载</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline">
                查看更多指南
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
                  第一时间获取最新的指南、电子书和行业洞察
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
