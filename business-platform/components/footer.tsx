import Link from "next/link"
import { Brain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-bold">AAFB</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              AAFB (AI assistant for B-side)
              结合AI与商业知识，为B端商家提供一站式CRM、数据分析、自动化邮件营销解决方案，助力企业实现增长。
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-purple-600">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-600">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-600">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-purple-600">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">产品</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/crm" className="text-muted-foreground hover:text-purple-600">
                  智能CRM
                </Link>
              </li>
              <li>
                <Link href="/products/analytics" className="text-muted-foreground hover:text-purple-600">
                  数据分析
                </Link>
              </li>
              <li>
                <Link href="/products/email-marketing" className="text-muted-foreground hover:text-purple-600">
                  邮件营销
                </Link>
              </li>
              <li>
                <Link href="/products/ai-assistant" className="text-muted-foreground hover:text-purple-600">
                  AI助手
                </Link>
              </li>
              <li>
                <Link href="/products/integrations" className="text-muted-foreground hover:text-purple-600">
                  集成与API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">解决方案</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/solutions/ecommerce" className="text-muted-foreground hover:text-purple-600">
                  电子商务
                </Link>
              </li>
              <li>
                <Link href="/solutions/saas" className="text-muted-foreground hover:text-purple-600">
                  SaaS企业
                </Link>
              </li>
              <li>
                <Link href="/solutions/b2b" className="text-muted-foreground hover:text-purple-600">
                  B2B企业
                </Link>
              </li>
              <li>
                <Link href="/solutions/agencies" className="text-muted-foreground hover:text-purple-600">
                  营销代理商
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise" className="text-muted-foreground hover:text-purple-600">
                  企业解决方案
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">公司</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-purple-600">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-purple-600">
                  招贤纳士
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-purple-600">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-purple-600">
                  合作伙伴
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-muted-foreground hover:text-purple-600">
                  法律条款
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AAFB. 保留所有权利.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-purple-600">
                隐私政策
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-purple-600">
                服务条款
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-purple-600">
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
