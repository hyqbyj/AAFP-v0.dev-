import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Brain } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold">AAFB</span>
            </Link>
            <h2 className="mt-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">免费注册账户</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              已有账户？{" "}
              <Link href="/login" className="font-medium text-purple-600 hover:text-purple-500">
                登录
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">名字</Label>
                    <div className="mt-2">
                      <Input id="first-name" name="first-name" type="text" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="last-name">姓氏</Label>
                    <div className="mt-2">
                      <Input id="last-name" name="last-name" type="text" required />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">公司名称</Label>
                  <div className="mt-2">
                    <Input id="company" name="company" type="text" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">工作邮箱</Label>
                  <div className="mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">设置密码</Label>
                  <div className="mt-2">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      placeholder="至少8个字符"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="ml-2 text-sm">
                    我同意{" "}
                    <Link href="/terms" className="text-purple-600 hover:text-purple-500">
                      服务条款
                    </Link>{" "}
                    和{" "}
                    <Link href="/privacy" className="text-purple-600 hover:text-purple-500">
                      隐私政策
                    </Link>
                  </Label>
                </div>

                <div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    创建账户
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-muted-foreground">或通过以下方式注册</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-400 to-purple-600">
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">开始您的免费试用</h2>
              <p className="mt-2 text-lg">注册账户，体验AAFB平台的全部功能</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
