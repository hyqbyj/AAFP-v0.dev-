import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, MessageSquare } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EmailMarketingPage() {
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
                    <Mail className="mr-1 h-3.5 w-3.5" />
                    自动化邮件营销
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI驱动的邮件营销平台
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    通过AAFB的自动化邮件营销系统，自动优化发送时间、内容和个性化，提高打开率和转化率。
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
                    src="/images/email-marketing-preview.png"
                    alt="邮件营销界面预览"
                    width={600}
                    height={420}
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">邮件营销功能</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB的邮件营销平台提供全面的功能，帮助您创建、发送和分析高效的邮件营销活动
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>AI内容生成</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI自动生成高转化率的邮件内容，根据您的品牌风格和目标受众进行个性化定制。
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
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                  </div>
                  <CardTitle>智能A/B测试</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    自动测试不同的主题行、内容和发送时间，AI分析结果并优化未来的邮件活动。
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle>触发式自动化流程</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    根据客户行为自动触发个性化邮件，如购物车放弃提醒、生日祝福或产品推荐。
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
                  <CardTitle>高级细分</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    基于人口统计、行为、购买历史和互动模式等多维度数据，精准细分客户群体。
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
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <CardTitle>实时分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    实时监控邮件活动的打开率、点击率和转化率，及时调整策略，优化营销效果。
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
                      <path d="M12 2v8" />
                      <path d="m4.93 10.93 1.41 1.41" />
                      <path d="M2 18h2" />
                      <path d="M20 18h2" />
                      <path d="m19.07 10.93-1.41 1.41" />
                      <path d="M22 22H2" />
                      <path d="m16 6-4 4-4-4" />
                      <path d="M16 18a4 4 0 0 0-8 0" />
                    </svg>
                  </div>
                  <CardTitle>最佳发送时间</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI分析每个客户的最佳接收时间，自动在最合适的时间发送邮件，提高打开率。
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">直观的邮件营销平台</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB的邮件营销平台提供简洁直观的用户界面，让您轻松创建和管理邮件活动
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl mt-8">
              <Tabs defaultValue="campaigns" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="campaigns">活动管理</TabsTrigger>
                  <TabsTrigger value="editor">邮件编辑器</TabsTrigger>
                  <TabsTrigger value="automation">自动化工作流</TabsTrigger>
                </TabsList>
                <TabsContent value="campaigns" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <Image
                      src="/images/email-campaigns.png"
                      alt="邮件活动管理界面"
                      width={1200}
                      height={675}
                      className="w-full"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="editor" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <Image
                      src="/images/email-editor.png"
                      alt="邮件编辑器界面"
                      width={1200}
                      height={675}
                      className="w-full"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="automation" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <Image
                      src="/images/email-automation.png"
                      alt="自动化工作流界面"
                      width={1200}
                      height={675}
                      className="w-full"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  实际效果
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">提升您的邮件营销效果</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB的客户平均实现以下提升
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4 lg:gap-12 mt-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-purple-600">35%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">打开率提升</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-purple-600">42%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">点击率提升</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-purple-600">28%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">转化率提升</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-purple-600">150%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">ROI提升</p>
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
                  准备好提升您的邮件营销效果了吗？
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即开始14天免费试用，体验AAFB的自动化邮件营销平台
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
