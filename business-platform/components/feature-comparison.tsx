import { CheckCircle, XCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface FeatureComparisonProps {
  category: "crm" | "analytics" | "marketing"
}

const features = {
  crm: [
    { name: "联系人管理", starter: true, professional: true, enterprise: true },
    { name: "公司管理", starter: true, professional: true, enterprise: true },
    { name: "交易管理", starter: true, professional: true, enterprise: true },
    { name: "任务和提醒", starter: true, professional: true, enterprise: true },
    { name: "电子邮件集成", starter: true, professional: true, enterprise: true },
    { name: "自定义字段", starter: false, professional: true, enterprise: true },
    { name: "销售流程自动化", starter: false, professional: true, enterprise: true },
    { name: "团队协作工具", starter: false, professional: true, enterprise: true },
    { name: "AI客户洞察", starter: false, professional: true, enterprise: true },
    { name: "高级权限控制", starter: false, professional: false, enterprise: true },
    { name: "自定义工作流", starter: false, professional: false, enterprise: true },
    { name: "专属客户成功经理", starter: false, professional: false, enterprise: true },
  ],
  analytics: [
    { name: "基础报表", starter: true, professional: true, enterprise: true },
    { name: "销售漏斗分析", starter: true, professional: true, enterprise: true },
    { name: "客户行为分析", starter: false, professional: true, enterprise: true },
    { name: "自定义仪表盘", starter: false, professional: true, enterprise: true },
    { name: "数据导出", starter: true, professional: true, enterprise: true },
    { name: "目标跟踪", starter: false, professional: true, enterprise: true },
    { name: "AI预测分析", starter: false, professional: true, enterprise: true },
    { name: "高级细分分析", starter: false, professional: false, enterprise: true },
    { name: "多渠道归因", starter: false, professional: false, enterprise: true },
    { name: "自定义API访问", starter: false, professional: false, enterprise: true },
  ],
  marketing: [
    { name: "邮件模板", starter: true, professional: true, enterprise: true },
    { name: "基础自动化", starter: true, professional: true, enterprise: true },
    { name: "A/B测试", starter: false, professional: true, enterprise: true },
    { name: "邮件列表管理", starter: true, professional: true, enterprise: true },
    { name: "基础分析报告", starter: true, professional: true, enterprise: true },
    { name: "AI内容生成", starter: false, professional: true, enterprise: true },
    { name: "高级自动化工作流", starter: false, professional: true, enterprise: true },
    { name: "个性化推荐", starter: false, professional: true, enterprise: true },
    { name: "多渠道营销", starter: false, professional: false, enterprise: true },
    { name: "高级细分", starter: false, professional: false, enterprise: true },
    { name: "预测发送优化", starter: false, professional: false, enterprise: true },
    { name: "自定义集成", starter: false, professional: false, enterprise: true },
  ],
}

export default function FeatureComparison({ category }: FeatureComparisonProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">功能</TableHead>
          <TableHead className="text-center">入门版</TableHead>
          <TableHead className="text-center">专业版</TableHead>
          <TableHead className="text-center">企业版</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features[category].map((feature, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{feature.name}</TableCell>
            <TableCell className="text-center">
              {feature.starter ? (
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              ) : (
                <XCircle className="h-5 w-5 text-slate-300 mx-auto" />
              )}
            </TableCell>
            <TableCell className="text-center">
              {feature.professional ? (
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              ) : (
                <XCircle className="h-5 w-5 text-slate-300 mx-auto" />
              )}
            </TableCell>
            <TableCell className="text-center">
              {feature.enterprise ? (
                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
              ) : (
                <XCircle className="h-5 w-5 text-slate-300 mx-auto" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
