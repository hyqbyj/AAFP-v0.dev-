import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Link2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function IntegrationsPage() {
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
                    <Link2 className="mr-1 h-3.5 w-3.5" />
                    集成与API
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    无缝连接您的业务系统
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    AAFB提供强大的集成能力和开放API，让您轻松连接现有系统，构建统一的业务生态。
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
                      联系销售团队
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[420px] overflow-hidden rounded-xl border bg-white shadow-xl">
                  <Image
                    src="/images/integrations-hero.png"
                    alt="集成与API预览"
                    width={600}
                    height={420}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  集成类别
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">丰富的集成生态</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB支持与各类业务系统的集成，构建统一的数据流和工作流
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
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
                      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
                      <line x1="18" x2="12" y1="9" y2="15" />
                      <line x1="12" x2="18" y1="9" y2="15" />
                    </svg>
                  </div>
                  <CardTitle>电子商务平台</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">与主流电商平台无缝集成，同步订单、客户和产品数据。</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Shopify</Badge>
                    <Badge variant="secondary">WooCommerce</Badge>
                    <Badge variant="secondary">Magento</Badge>
                    <Badge variant="secondary">淘宝</Badge>
                    <Badge variant="secondary">京东</Badge>
                  </div>
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
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                      <path d="M22 12A10 10 0 0 0 12 2v10z" />
                    </svg>
                  </div>
                  <CardTitle>营销工具</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">连接各类营销工具，统一管理营销活动和数据。</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Google Ads</Badge>
                    <Badge variant="secondary">Facebook Ads</Badge>
                    <Badge variant="secondary">Mailchimp</Badge>
                    <Badge variant="secondary">HubSpot</Badge>
                    <Badge variant="secondary">微信营销</Badge>
                  </div>
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
                      <path d="M12 2H2v10h10V2Z" />
                      <path d="M22 12h-10v10h10V12Z" />
                      <path d="M12 12H2v10h10V12Z" />
                      <path d="M22 2h-10v10h10V2Z" />
                    </svg>
                  </div>
                  <CardTitle>ERP系统</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">与企业资源规划系统集成，实现业务数据的统一管理。</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">SAP</Badge>
                    <Badge variant="secondary">Oracle</Badge>
                    <Badge variant="secondary">Dynamics 365</Badge>
                    <Badge variant="secondary">用友</Badge>
                    <Badge variant="secondary">金蝶</Badge>
                  </div>
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
                  <CardTitle>客户服务工具</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">连接客服系统，提供统一的客户服务体验。</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Zendesk</Badge>
                    <Badge variant="secondary">Intercom</Badge>
                    <Badge variant="secondary">Freshdesk</Badge>
                    <Badge variant="secondary">美洽</Badge>
                    <Badge variant="secondary">智齿客服</Badge>
                  </div>
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
                      <path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z" />
                    </svg>
                  </div>
                  <CardTitle>社交媒体</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">集成各类社交媒体平台，统一管理社交互动和营销。</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">微信</Badge>
                    <Badge variant="secondary">微博</Badge>
                    <Badge variant="secondary">Facebook</Badge>
                    <Badge variant="secondary">Instagram</Badge>
                    <Badge variant="secondary">LinkedIn</Badge>
                  </div>
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
                      <path d="M20 7h-3a2 2 0 0 0-2 2v1H9V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1h6v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
                    </svg>
                  </div>
                  <CardTitle>支付系统</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">集成各类支付系统，提供统一的支付管理和数据分析。</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">支付宝</Badge>
                    <Badge variant="secondary">微信支付</Badge>
                    <Badge variant="secondary">PayPal</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">银联</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                  >
                    开放API
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">强大的API能力</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    AAFB提供全面的RESTful API，让您可以根据业务需求构建自定义集成和扩展。
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">全面的API覆盖</h3>
                      <p className="text-muted-foreground">
                        覆盖CRM、数据分析、邮件营销等所有核心功能，满足各类集成需求。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">详细的开发文档</h3>
                      <p className="text-muted-foreground">
                        提供全面的API文档、代码示例和开发指南，帮助开发人员快速上手。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">安全可靠</h3>
                      <p className="text-muted-foreground">采用OAuth 2.0认证，支持API密钥管理，确保数据传输安全。</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/developers">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      查看开发者文档
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl border bg-white p-4 shadow-lg">
                  <pre className="text-sm text-slate-800 overflow-x-auto">
                    <code>{`// 示例：获取客户列表
fetch('https://api.aafb.com/v1/customers', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// 示例：创建邮件活动
fetch('https://api.aafb.com/v1/email/campaigns', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: '夏季促销活动',
    subject: '限时优惠：全场商品8折',
    content: '...',
    segment_id: '12345',
    schedule_time: '2023-07-15T10:00:00Z'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-900"
                >
                  集成流程
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">简单高效的集成过程</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AAFB提供简单直观的集成流程，让您快速连接各类业务系统
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                    <span className="text-2xl font-bold text-purple-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">选择集成</h3>
                  <p className="text-muted-foreground">从AAFB的集成市场中选择您需要的集成，或使用API构建自定义集成。</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">授权连接</h3>
                  <p className="text-muted-foreground">通过简单的授权流程，安全地连接AAFB与您的业务系统。</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">配置与使用</h3>
                  <p className="text-muted-foreground">根据业务需求配置数据同步和工作流，开始使用集成功能。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  准备好连接您的业务系统了吗？
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  立即开始14天免费试用，体验AAFB的强大集成能力
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
                    联系销售团队
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
