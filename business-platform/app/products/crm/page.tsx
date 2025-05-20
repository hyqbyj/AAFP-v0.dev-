import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CRMPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2"
                  >
                    <Users className="mr-1 h-3.5 w-3.5" />
                    智能CRM系统
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI驱动的客户关系管理
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    通过AAFB的智能CRM系统，自动分析客户行为，提供个性化互动建议，提升客户满意度和忠诚度。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      免费试用14天
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      预约演示
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[420px] overflow-hidden rounded-xl border bg-white shadow-xl">
                  <Image
                    src="/placeholder.svg?height=420&width=600&text=CRM+Dashboard"
                    alt="CRM系统界面预览"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  核心功能
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">智能CRM系统功能</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB的CRM系统集成了先进的AI技术，帮助您更好地管理客户关系，提高销售效率
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>360°客户视图</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    全方位了解您的客户，包括互动历史、购买记录、偏好和行为模式，帮助您提供个性化服务。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle>智能客户分群</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI自动根据客户特征、行为和价值进行分群，帮助您针对不同群体制定精准的营销和销售策略。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-600"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <CardTitle>自动化跟进提醒</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    系统自动提醒您跟进潜在客户和现有客户，确保重要的销售机会不会被错过，提高成交率。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <CardTitle>销售漏斗管理</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    可视化销售漏斗，清晰了解每个阶段的客户状态，优化销售流程，提高转化率。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-600"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <CardTitle>多渠道集成</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    无缝集成电子邮件、社交媒体、网站和其他渠道，统一管理所有客户互动，提供一致的客户体验。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-600"
                    >
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="M12 12H3" />
                      <path d="M16 6v4" />
                      <path d="M8 6v4" />
                      <path d="M17 21l5-5" />
                      <path d="M17 16l5 5" />
                    </svg>
                  </div>
                  <CardTitle>AI销售助手</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI助手提供销售建议，自动生成跟进邮件和提案，帮助销售团队提高效率和成功率。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Screenshot Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">直观的用户界面</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB的CRM系统提供简洁直观的用户界面，让您轻松管理客户关系
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl mt-8">
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="dashboard">仪表盘</TabsTrigger>
                  <TabsTrigger value="contacts">联系人管理</TabsTrigger>
                  <TabsTrigger value="deals">交易管理</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <div className="relative w-full h-[675px]">
                      <Image
                        src="/placeholder.svg?height=675&width=1200&text=CRM+Dashboard+Interface"
                        alt="CRM仪表盘界面"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="contacts" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <div className="relative w-full h-[675px]">
                      <Image
                        src="/placeholder.svg?height=675&width=1200&text=Contact+Management+Interface"
                        alt="联系人管理界面"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="deals" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <div className="relative w-full h-[675px]">
                      <Image
                        src="/placeholder.svg?height=675&width=1200&text=Deal+Management+Interface"
                        alt="交易管理界面"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  客户评价
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">客户如何评价我们的CRM系统</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  了解其他企业如何通过AAFB的CRM系统提升业务效率
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-8">
              <Card className="bg-slate-50">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8">
                    <div className="mb-4 md:mb-0">
                      <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-600">WQ</span>
                      </div>
                    </div>
                    <div>
                      <blockquote className="text-lg italic text-muted-foreground mb-4">
                        "自从使用了AAFB的CRM系统，我们的销售团队效率提高了40%。AI驱动的客户洞察功能帮助我们更好地了解客户需求，提供更有针对性的解决方案。系统的自动化跟进提醒确保我们不会错过任何重要的销售机会。"
                      </blockquote>
                      <div>
                        <p className="font-semibold">王强</p>
                        <p className="text-sm text-muted-foreground">销售总监，科技创新有限公司</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  准备好提升您的客户关系管理了吗？
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即开始14天免费试用，体验AAFB的智能CRM系统
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100">
                    免费试用14天
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700">
                    预约演示
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-purple-100">无需信用卡，随时可取消</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
