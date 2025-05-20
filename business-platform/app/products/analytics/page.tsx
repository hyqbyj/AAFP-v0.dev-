import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, LineChart, PieChart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AnalyticsPage() {
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
                    <BarChart3 className="mr-1 h-3.5 w-3.5" />
                    高级数据分析
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI驱动的业务数据分析
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    通过AAFB的高级数据分析工具，挖掘业务洞察，预测趋势，做出数据驱动的决策，提升业务增长。
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
                  <Image src="/images/analytics-dashboard.png" alt="数据分析界面预览" fill className="object-cover" />
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">数据分析功能</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB的数据分析工具提供全面的业务洞察，帮助您做出明智的决策
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>实时数据仪表盘</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    可自定义的实时数据仪表盘，展示关键业务指标，让您随时了解业务状况。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <PieChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>客户行为分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">深入分析客户行为模式，了解客户偏好和需求，优化产品和服务。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <LineChart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>预测性分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI算法分析历史数据，预测未来趋势和结果，帮助您提前做好业务规划。
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
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <CardTitle>客户反馈分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    自动分析客户反馈和评价，识别关键问题和改进机会，提升客户满意度。
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
                  <CardTitle>销售漏斗分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    详细分析销售漏斗各阶段的转化率，识别瓶颈，优化销售流程，提高成交率。
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
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <CardTitle>ROI分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    精确计算各项营销和销售活动的投资回报率，帮助您优化资源分配，提高投资效益。
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">强大的分析工具</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB的数据分析平台提供直观的可视化工具，帮助您轻松理解复杂数据
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl mt-8">
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="dashboard">数据仪表盘</TabsTrigger>
                  <TabsTrigger value="reports">自定义报告</TabsTrigger>
                  <TabsTrigger value="predictions">预测分析</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <div className="relative w-full h-[675px]">
                      <Image src="/images/analytics-dashboard.png" alt="数据仪表盘界面" fill className="object-cover" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reports" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <div className="relative w-full h-[675px]">
                      <Image src="/images/analytics-reports.png" alt="自定义报告界面" fill className="object-cover" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="predictions" className="mt-6">
                  <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                    <div className="relative w-full h-[675px]">
                      <Image src="/images/analytics-predictions.png" alt="预测分析界面" fill className="object-cover" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  准备好利用数据驱动业务增长了吗？
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即开始14天免费试用，体验AAFB的高级数据分析工具
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
