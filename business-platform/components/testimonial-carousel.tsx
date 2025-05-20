"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "自从使用了AAFB平台，我们的邮件营销转化率提高了35%，客户互动也更加活跃。AI驱动的内容生成功能为我们节省了大量时间。",
    author: "张明",
    role: "营销总监",
    company: "优科技术",
    avatar: "ZM",
  },
  {
    id: 2,
    content:
      "作为一家快速成长的电商企业，我们需要一个能够随我们业务扩展的CRM系统。这个平台不仅满足了我们的需求，还通过AI分析帮助我们发现了许多业务增长机会。",
    author: "李婷",
    role: "电商负责人",
    company: "环球购物",
    avatar: "LT",
  },
  {
    id: 3,
    content:
      "数据分析功能非常强大，让我们能够深入了解客户行为和偏好。预测分析帮助我们提前调整策略，大大提高了营销效率和投资回报率。",
    author: "王强",
    role: "数据分析师",
    company: "未来科技",
    avatar: "WQ",
  },
  {
    id: 4,
    content:
      "作为一家B2B企业，我们的销售周期较长。这个平台的自动化跟进功能帮助我们保持与潜在客户的联系，显著缩短了销售周期，提高了成交率。",
    author: "陈静",
    role: "销售总监",
    company: "恒信科技",
    avatar: "CJ",
  },
  {
    id: 5,
    content:
      "AI助手功能是我们团队的得力助手，它能够自动分析客户反馈，提供有价值的洞察，帮助我们不断改进产品和服务。客户满意度显著提升。",
    author: "赵伟",
    role: "客户成功经理",
    company: "云端服务",
    avatar: "ZW",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let visibleCount = 1

      if (width >= 1024) {
        visibleCount = 3
      } else if (width >= 768) {
        visibleCount = 2
      }

      const visible = []
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % testimonials.length
        visible.push(testimonials[index])
      }

      setVisibleTestimonials(visible)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-4">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="min-w-[300px] flex-1">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={handlePrev}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">上一个</span>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">下一个</span>
        </Button>
      </div>
    </div>
  )
}
