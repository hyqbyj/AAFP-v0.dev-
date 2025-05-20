"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Brain, Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Brain className="h-6 w-6 text-purple-600" />
          <span className="text-lg font-bold">AAFB</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>产品</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-3">
                  <Link href="/products/crm" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">智能CRM</div>
                      <div className="text-sm text-muted-foreground">AI驱动的客户关系管理系统</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/products/analytics" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">数据分析</div>
                      <div className="text-sm text-muted-foreground">深入业务洞察和预测分析</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/products/email-marketing" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">邮件营销</div>
                      <div className="text-sm text-muted-foreground">自动化邮件营销和个性化内容</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/products/ai-assistant" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">AI助手</div>
                      <div className="text-sm text-muted-foreground">智能业务助手和自动化工具</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/products/integrations" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">集成与API</div>
                      <div className="text-sm text-muted-foreground">与您现有系统的无缝集成</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/products/all" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">全部产品</div>
                      <div className="text-sm text-muted-foreground">浏览我们的全部产品和服务</div>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>解决方案</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                  <Link href="/solutions/ecommerce" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">电子商务</div>
                      <div className="text-sm text-muted-foreground">提升转化率和客户终身价值</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/solutions/saas" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">SaaS企业</div>
                      <div className="text-sm text-muted-foreground">优化客户获取和留存策略</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/solutions/b2b" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">B2B企业</div>
                      <div className="text-sm text-muted-foreground">加速销售周期和提高成交率</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/solutions/agencies" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">营销代理商</div>
                      <div className="text-sm text-muted-foreground">为客户提供更高价值的服务</div>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>价格</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>资源</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <Link href="/resources/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">博客</div>
                      <div className="text-sm text-muted-foreground">最新的营销和CRM趋势与策略</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/resources/guides" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">指南与电子书</div>
                      <div className="text-sm text-muted-foreground">深入的行业指南和最佳实践</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/resources/webinars" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">网络研讨会</div>
                      <div className="text-sm text-muted-foreground">专家主持的在线培训和讨论</div>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/resources/help-center" legacyBehavior passHref>
                    <NavigationMenuLink className="flex flex-col space-y-1 rounded-md p-3 hover:bg-slate-100">
                      <div className="font-medium">帮助中心</div>
                      <div className="text-sm text-muted-foreground">产品文档和常见问题解答</div>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/login" className="hidden lg:block">
            <Button variant="ghost">登录</Button>
          </Link>
          <Link href="/signup" className="hidden lg:block">
            <Button className="bg-purple-600 hover:bg-purple-700">免费试用</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={() => setIsOpen(false)}>
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span>AAFB</span>
                </Link>
                <Link href="/products" onClick={() => setIsOpen(false)}>
                  产品
                </Link>
                <Link href="/solutions" onClick={() => setIsOpen(false)}>
                  解决方案
                </Link>
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  价格
                </Link>
                <Link href="/resources" onClick={() => setIsOpen(false)}>
                  资源
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  登录
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">免费试用</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
