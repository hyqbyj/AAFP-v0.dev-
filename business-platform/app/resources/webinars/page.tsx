import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Play, Search, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const webinars = [
  {
    id: 1,
    title: "AI驱动的CRM：提升客户体验与销售效果",
    excerpt: "探索人工智能如何改变CRM格局，提供个性化客户体验，优化销售流程，提高团队效率。",
    image: "/images/webinar-1.png",
    category: "CRM",
    date: "2023-07-15",
    time: "14:00-15:30",
    speaker: "张明",
    speakerTitle: "AAFB产品总监",
    speakerImage: "/images/speaker-1.png",
    status: "upcoming", // 即将举行
  },
  {
    id: 2,
    title: "高效B2B营销：多渠道整合策略与最佳实践",
    excerpt: "深入了解如何整合各种B2B营销渠道，创建一致的品牌体验，最大化营销效果和投资回报率。",
    image: "/images/webinar-2.png",
    category: "营销策略",
    date: "2023-07-20",
    time: "10:00-11:30",
    speaker: "李婷",
    speakerTitle: "AAFB营销总监",
    speakerImage: "/images/speaker-2.png",
    status: "upcoming", // 即将举行
  },
  {
    id: 3,
    title: "数据分析与可视化：从数据到洞察的转变",
    excerpt: "学习如何有效分析和可视化业务数据，发现隐藏模式，做出数据驱动的决策，推动业务增长。",
    image: "/images/webinar-3.png",
    category: "数据分析",
    date: "2023-06-28",
    time: "14:00-15:30",
    speaker: "王强",
    speakerTitle: "AAFB数据科学主管",
    speakerImage: "/images/speaker-3.png",
    status: "recorded", // 已录制
  },
  {
    id: 4,
    title: "客户生命周期价值优化：获客、留存与增长策略",
    excerpt: "深入探讨如何优化客户生命周期的各个阶段，降低获客成本，提高留存率，增加客户价值。",
    image: "/images/webinar-4.png",
    category: "客户管理",
    date: "2023-06-15",
    time: "10:00-11:30",
    speaker: "陈静",
    speakerTitle: "AAFB客户成功总监",
    speakerImage: "/images/speaker-4.png",
    status: "recorded", // 已录制
  },
  {
    id: 5,
    title: "自动化邮件营销：提高打开率、点击率与转化率",
    excerpt: "学习如何设计和实施高效的邮件营销活动，提高关键指标，实现更好的营销结果。",
    image: "/images/webinar-5.png",
    category: "邮件营销",
    date: "2023-05-25",
    time: "14:00-15:30",
    speaker: "赵伟",
    speakerTitle: "AAFB邮件营销专家",
    speakerImage: "/images/speaker-5.png",
    status: "recorded", // 已录制
  },
  {
    id: 6,
    title: "SaaS企业增长策略：产品采用、留存与扩展销售",
    excerpt: "探索SaaS企业如何优化产品采用流程，提高客户留存率，增加扩展销售机会，实现可持续增长。",
    image: "/images/webinar-6.png",
    category: "SaaS策略",
    date: "2023-05-12",
    time: "10:00-11:30",
    speaker: "林小红",
    speakerTitle: "AAFB增长策略顾问",
    speakerImage: "/images/speaker-6.png",
    status: "recorded", // 已录制
  },
]

const categories = ["全部", "CRM", "营销策略", "数据分析", "客户管理", "邮件营销", "SaaS策略"]

export default function WebinarsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">网络研讨会</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  参加我们的网络研讨会，向行业专家学习，获取深度洞察和实用技巧
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="搜索研讨会..." className="w-full bg-white pl-8 shadow-sm" />
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
                <Link key={index} href={`/resources/webinars/category/${category}`}>
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

        {/* Featured Webinar */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/featured-webinar.png"
                    alt="AI驱动的CRM：提升客户体验与销售效果"
                    width={600}
                    height={400}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                      <Play className="h-8 w-8 text-purple-600 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <Badge className="bg-purple-600 mb-2">即将举行</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    AI驱动的CRM：提升客户体验与销售效果
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2023-07-15</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>14:00-15:30</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>张明 (AAFB产品总监)</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  人工智能正在彻底改变CRM领域，为企业提供了前所未有的客户洞察和个性化能力。在这场研讨会中，我们将探讨AI如何增强CRM系统，帮助企业更好地了解客户，优化销售流程，提高团队效率。您将学习到实用的AI应用案例和最佳实践，以及如何在您的组织中实施这些解决方案。
                </p>
                <div>
                  <Link href="/resources/webinars/register/1">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      立即注册
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">即将举行的研讨会</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  注册参加我们即将举行的网络研讨会，与行业专家互动
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
              {webinars
                .filter((webinar) => webinar.status === "upcoming")
                .map((webinar) => (
                  <Link key={webinar.id} href={`/resources/webinars/register/${webinar.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={`/images/webinar-${webinar.id <= 6 ? webinar.id : (webinar.id % 6) + 1}.png`}
                          alt={webinar.title}
                          width={400}
                          height={225}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-2 right-2 bg-purple-600">即将举行</Badge>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{webinar.category}</Badge>
                        </div>
                        <CardTitle className="line-clamp-2">{webinar.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-1">
                        <CardDescription className="line-clamp-2">{webinar.excerpt}</CardDescription>
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{webinar.time}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 border-t mt-auto">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={`/images/speaker-${webinar.id <= 6 ? webinar.id : (webinar.id % 6) + 1}.png`}
                              alt={webinar.speaker}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{webinar.speaker}</p>
                          <p className="text-xs text-muted-foreground">{webinar.speakerTitle}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
          </div>
        </section>

        {/* Recorded Webinars */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">录制的研讨会</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  观看我们的研讨会录像，随时学习行业知识和最佳实践
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
              {webinars
                .filter((webinar) => webinar.status === "recorded")
                .map((webinar) => (
                  <Link key={webinar.id} href={`/resources/webinars/watch/${webinar.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={webinar.image || "/placeholder.svg"}
                          alt={webinar.title}
                          width={400}
                          height={225}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                            <Play className="h-6 w-6 text-purple-600 ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{webinar.category}</Badge>
                        </div>
                        <CardTitle className="line-clamp-2 text-base">{webinar.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              src={webinar.speakerImage || "/placeholder.svg"}
                              alt={webinar.speaker}
                              width={24}
                              height={24}
                              className="object-cover"
                            />
                          </div>
                          <p className="text-sm font-medium">{webinar.speaker}</p>
                        </div>
                        <CardDescription className="line-clamp-2 text-xs">{webinar.excerpt}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline">
                查看更多研讨会
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">订阅研讨会通知</h2>
                <p className="max-w-[600px] md:text-xl">第一时间获取我们即将举行的网络研讨会信息，不错过任何学习机会</p>
              </div>
              <div className="w-full max-w-md">
                <div className="flex space-x-2">
                  <Input type="email" placeholder="您的邮箱地址" className="flex-1 bg-white" />
                  <Button className="bg-white text-purple-600 hover:bg-slate-100">订阅</Button>
                </div>
                <p className="mt-2 text-sm text-purple-200">我们尊重您的隐私，不会向第三方分享您的信息。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
