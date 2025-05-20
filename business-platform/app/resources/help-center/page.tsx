import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, LifeBuoy, Search, Users, Mail, MessageCircle, PhoneCall } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const popularTopics = [
  {
    id: "getting-started",
    title: "入门指南",
    icon: <FileText className="h-5 w-5 text-purple-600" />,
    articles: [
      { id: 1, title: "如何注册和设置您的账户", views: 12580 },
      { id: 2, title: "快速入门：15分钟上手AAFB", views: 9870 },
      { id: 3, title: "导入您的数据和联系人", views: 8450 },
      { id: 4, title: "设置您的第一个营销活动", views: 7320 },
      { id: 5, title: "AAFB用户界面导航指南", views: 6890 },
    ],
  },
  {
    id: "crm",
    title: "CRM功能",
    icon: <Users className="h-5 w-5 text-purple-600" />,
    articles: [
      { id: 6, title: "客户管理基础：联系人和公司", views: 10250 },
      { id: 7, title: "设置和管理销售漏斗", views: 8920 },
      { id: 8, title: "自动化工作流和提醒", views: 7650 },
      { id: 9, title: "使用AI客户洞察", views: 6840 },
      { id: 10, title: "CRM数据字段自定义指南", views: 5980 },
    ],
  },
  {
    id: "analytics",
    title: "数据分析",
    icon: <FileText className="h-5 w-5 text-purple-600" />,
    articles: [
      { id: 11, title: "创建自定义仪表盘", views: 9540 },
      { id: 12, title: "销售数据分析和报告", views: 8760 },
      { id: 13, title: "客户行为分析指南", views: 7380 },
      { id: 14, title: "使用预测分析功能", views: 6540 },
      { id: 15, title: "数据导出和API集成", views: 5870 },
    ],
  },
  {
    id: "marketing",
    title: "邮件营销",
    icon: <Mail className="h-5 w-5 text-purple-600" />,
    articles: [
      { id: 16, title: "创建和设计邮件模板", views: 11240 },
      { id: 17, title: "邮件营销活动设置指南", views: 9870 },
      { id: 18, title: "A/B测试最佳实践", views: 8430 },
      { id: 19, title: "使用AI生成邮件内容", views: 7650 },
      { id: 20, title: "邮件营销自动化工作流", views: 6920 },
    ],
  },
]

const faqItems = [
  {
    question: "AAFB提供哪些主要功能？",
    answer:
      "AAFB是一个全面的B2B业务增长平台，提供智能CRM、高级数据分析、自动化邮件营销和AI助手等核心功能。我们的平台帮助企业优化客户关系管理，提高销售效率，增强营销效果，实现业务增长。",
  },
  {
    question: "如何开始使用AAFB？",
    answer:
      "开始使用AAFB非常简单。首先注册一个免费试用账户，然后按照我们的入门指南进行账户设置。您可以导入现有客户数据，或从头开始添加联系人。我们的客户成功团队会在整个过程中提供支持，确保您顺利开始使用我们的平台。",
  },
  {
    question: "AAFB与其他CRM系统集成吗？",
    answer:
      "是的，AAFB提供广泛的集成能力。我们支持与主流CRM系统、电子商务平台、营销工具、ERP系统和支付系统等的集成。此外，我们还提供开放API，允许您构建自定义集成，满足特定的业务需求。",
  },
  {
    question: "AAFB适合什么规模的企业？",
    answer:
      "AAFB适合各种规模的企业，从小型企业到大型企业。我们提供灵活的价格方案，可以根据您的业务需求进行调整。无论您是初创企业还是成熟企业，我们的平台都能提供适合您的解决方案，并随着您的业务增长而扩展。",
  },
  {
    question: "AAFB如何保障数据安全？",
    answer:
      "数据安全是我们的首要任务。AAFB采用行业标准的加密技术保护数据传输和存储，实施严格的访问控制和权限管理，定期进行安全审计和更新。我们遵守GDPR等数据保护法规，确保您的业务数据和客户信息安全。",
  },
  {
    question: "是否提供培训和支持服务？",
    answer:
      "是的，我们提供全面的培训和支持服务。我们的入门指南、视频教程和知识库可帮助您快速上手。此外，我们还提供多种支持渠道，包括电子邮件、实时聊天和电话支持。企业版客户还可获得专属客户成功经理的一对一支持。",
  },
]

export default function HelpCenterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">帮助中心</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  查找您需要的指引和解答，快速解决问题，充分利用AAFB平台
                </p>
              </div>
              <div className="w-full max-w-xl">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="搜索问题或关键词..."
                    className="w-full rounded-full bg-white pl-10 py-6 shadow-sm text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">热门主题</h2>
              <p className="max-w-[600px] text-muted-foreground">浏览我们最受欢迎的资源和教程</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {popularTopics.map((topic) => (
                <Card key={topic.id} className="border-2 hover:border-purple-200 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      {topic.icon}
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {topic.articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                          <Link
                            href={`/resources/help-center/${topic.id}/${article.id}`}
                            className="text-muted-foreground hover:text-purple-600 hover:underline flex items-start"
                          >
                            <ChevronRight className="h-4 w-4 mr-1 mt-1 flex-shrink-0" />
                            <span>{article.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/resources/help-center/${topic.id}`} className="mt-4 inline-block">
                      <Button variant="link" className="p-0 h-auto text-purple-600">
                        查看全部文章
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">常见问题</h2>
              <p className="max-w-[600px] text-muted-foreground">查找有关AAFB平台的常见问题和解答</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 text-center">
                <Link href="/resources/help-center/faq">
                  <Button variant="outline">
                    查看更多常见问题
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  <LifeBuoy className="mr-1 h-3.5 w-3.5" />
                  客户支持
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">联系我们的支持团队</h2>
                <p className="max-w-[600px] text-muted-foreground">
                  没有找到您需要的答案？我们的支持团队随时准备提供帮助
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <Tabs defaultValue="chat" className="w-full max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="chat">在线聊天</TabsTrigger>
                  <TabsTrigger value="email">电子邮件</TabsTrigger>
                  <TabsTrigger value="phone">电话支持</TabsTrigger>
                </TabsList>
                <TabsContent value="chat" className="p-4 border rounded-lg bg-slate-50">
                  <div className="flex items-center justify-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">实时聊天支持</h3>
                      <p className="text-muted-foreground">与我们的客户支持代表进行实时对话</p>
                    </div>
                  </div>
                  <p className="mb-4">
                    工作时间：周一至周五 9:00-18:00（节假日除外）
                    <br />
                    平均响应时间：不到5分钟
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">开始聊天</Button>
                </TabsContent>
                <TabsContent value="email" className="p-4 border rounded-lg bg-slate-50">
                  <div className="flex items-center justify-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">电子邮件支持</h3>
                      <p className="text-muted-foreground">发送电子邮件获取详细帮助</p>
                    </div>
                  </div>
                  <p className="mb-4">
                    工作时间：周一至周五 9:00-18:00（节假日除外）
                    <br />
                    平均响应时间：24小时内
                  </p>
                  <div className="flex flex-col md:flex-row gap-2">
                    <Input type="email" placeholder="您的邮箱地址" className="flex-1" />
                    <Button className="bg-purple-600 hover:bg-purple-700">联系我们</Button>
                  </div>
                </TabsContent>
                <TabsContent value="phone" className="p-4 border rounded-lg bg-slate-50">
                  <div className="flex items-center justify-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <PhoneCall className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">电话支持</h3>
                      <p className="text-muted-foreground">直接与我们的支持团队通话</p>
                    </div>
                  </div>
                  <p className="mb-4">
                    工作时间：周一至周五 9:00-18:00（节假日除外）
                    <br />
                    仅限企业版客户
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">查看电话号码</Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">视频教程</h2>
              <p className="max-w-[600px] text-muted-foreground">通过我们的视频教程快速学习AAFB平台的使用方法</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Link href="/resources/help-center/videos/1" className="group">
                <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
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
                          className="h-6 w-6 text-purple-600 ml-1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                    <Image
                      src="/images/tutorial-1.png"
                      alt="AAFB平台入门指南"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">AAFB平台入门指南</h3>
                    <p className="text-sm text-muted-foreground mt-1">5:32 • 12,450次观看</p>
                  </div>
                </div>
              </Link>
              <Link href="/resources/help-center/videos/2" className="group">
                <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
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
                          className="h-6 w-6 text-purple-600 ml-1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                    <Image
                      src="/images/tutorial-2.png"
                      alt="如何设置和管理销售漏斗"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">如何设置和管理销售漏斗</h3>
                    <p className="text-sm text-muted-foreground mt-1">7:15 • 9,870次观看</p>
                  </div>
                </div>
              </Link>
              <Link href="/resources/help-center/videos/3" className="group">
                <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
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
                          className="h-6 w-6 text-purple-600 ml-1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                    <Image
                      src="/images/tutorial-3.png"
                      alt="邮件营销活动创建指南"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">邮件营销活动创建指南</h3>
                    <p className="text-sm text-muted-foreground mt-1">6:48 • 8,540次观看</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-8 text-center">
              <Link href="/resources/help-center/videos">
                <Button variant="outline">
                  查看更多视频教程
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
