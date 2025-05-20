import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Brain, CheckCircle, Mail, MessageSquare, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FeatureComparison from "@/components/feature-comparison"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2"
                  >
                    <Brain className="mr-1 h-3.5 w-3.5" />
                    AI驱动的商业增长平台
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AAFB: 智能化您的客户关系与营销策略
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    结合AI与商业知识，为B端商家提供一站式CRM、数据分析、自动化邮件营销解决方案，助力企业实现增长。
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
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>无需信用卡</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>全功能体验</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>专家支持</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[420px] overflow-hidden rounded-xl border bg-white shadow-xl">
                  <Image src="/placeholder.svg?height=420&width=600" alt="平台界面预览" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">受到全球企业的信赖</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我们的平台已帮助数千家企业提升客户关系管理效率，增强营销效果，实现业务增长
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8 mt-8">
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-4xl font-bold">10,000+</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-center text-muted-foreground">活跃企业用户</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-4xl font-bold">98%</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-center text-muted-foreground">客户满意度</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-4xl font-bold">150%</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-center text-muted-foreground">平均ROI提升</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-4xl font-bold">35%</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-center text-muted-foreground">营销转化率提升</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  核心功能
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">一站式商业增长解决方案</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我们整合了CRM、数据分析和自动化营销工具，并融入AI技术，为您提供全方位的商业增长支持
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card className="relative overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>智能CRM系统</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    AI驱动的客户关系管理系统，自动分析客户行为，提供个性化互动建议，提升客户满意度和忠诚度。
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>360°客户视图</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>智能客户分群</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>自动化跟进提醒</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/products/crm" className="text-purple-600 hover:underline inline-flex items-center">
                    了解更多
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>高级数据分析</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    强大的数据分析工具，通过AI算法挖掘业务洞察，预测趋势，帮助您做出数据驱动的决策。
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>实时数据仪表盘</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>预测性分析</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>自定义报告生成</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/products/analytics" className="text-purple-600 hover:underline inline-flex items-center">
                    了解更多
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>自动化邮件营销</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    AI辅助的邮件营销系统，自动优化发送时间、内容和个性化，提高打开率和转化率。
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>AI内容生成</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>智能A/B测试</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>触发式自动化流程</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/products/email-marketing"
                    className="text-purple-600 hover:underline inline-flex items-center"
                  >
                    了解更多
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[450px] overflow-hidden rounded-xl border bg-slate-50 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=450&width=550&text=AI+Insights+Dashboard"
                    alt="AI功能展示"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                  >
                    <Brain className="mr-1 h-3.5 w-3.5" />
                    AI赋能
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    AI技术如何提升您的业务
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    我们的平台深度整合了最先进的AI技术，为您的业务带来前所未有的智能化体验
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                      <Brain className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">智能客户洞察</h3>
                      <p className="text-muted-foreground">
                        AI分析客户行为模式，预测需求和偏好，帮助您提前了解客户需求
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">自动内容生成</h3>
                      <p className="text-muted-foreground">
                        AI根据您的品牌风格和目标受众，自动生成高转化率的邮件和营销内容
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">预测性分析</h3>
                      <p className="text-muted-foreground">
                        AI算法分析历史数据，预测未来趋势和结果，帮助您做出更明智的业务决策
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/products/ai-assistant">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      探索AI功能
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  客户评价
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">客户如何评价我们</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  来自各行各业的企业分享他们使用我们平台后的成功故事
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  价格方案
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">为您的业务选择合适的方案</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  灵活的价格方案，满足不同规模企业的需求，随时可以升级或降级
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>入门版</CardTitle>
                  <CardDescription>适合小型企业和初创公司</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">¥299</span>
                    <span className="text-muted-foreground">/月</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>最多1,000个联系人</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>基础CRM功能</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>每月10,000封邮件</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>基础数据分析</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>邮件支持</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup">
                    <Button className="w-full">选择方案</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-purple-200 bg-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>专业版</CardTitle>
                    <Badge className="bg-purple-600">最受欢迎</Badge>
                  </div>
                  <CardDescription>适合中型企业和快速成长的团队</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">¥899</span>
                    <span className="text-muted-foreground">/月</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>最多10,000个联系人</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>高级CRM功能</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>每月50,000封邮件</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>高级数据分析与报告</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>AI内容生成</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>优先邮件和聊天支持</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">选择方案</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>企业版</CardTitle>
                  <CardDescription>适合大型企业和高级需求</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">¥2,499</span>
                    <span className="text-muted-foreground">/月</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>无限联系人</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>全部CRM功能</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>无限邮件发送</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>高级AI预测分析</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>专属客户成功经理</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>API访问和自定义集成</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span>24/7全天候支持</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup">
                    <Button className="w-full">选择方案</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                需要更多定制化方案？
                <Link href="/contact" className="text-purple-600 hover:underline ml-1">
                  联系我们的销售团队
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">功能对比</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  详细了解各个方案包含的功能，选择最适合您业务需求的方案
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <Tabs defaultValue="crm" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="crm">CRM功能</TabsTrigger>
                  <TabsTrigger value="analytics">数据分析</TabsTrigger>
                  <TabsTrigger value="marketing">邮件营销</TabsTrigger>
                </TabsList>
                <TabsContent value="crm" className="mt-6">
                  <FeatureComparison category="crm" />
                </TabsContent>
                <TabsContent value="analytics" className="mt-6">
                  <FeatureComparison category="analytics" />
                </TabsContent>
                <TabsContent value="marketing" className="mt-6">
                  <FeatureComparison category="marketing" />
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">准备好提升您的业务了吗？</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即开始14天免费试用，体验AI驱动的CRM、数据分析和邮件营销平台
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
