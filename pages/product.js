import ProductSingle from "@/components/ProductSingle"
import { useRouter } from "next/router"


export default function product() {
    const router = useRouter()
    const {pid,ptype,slug} = router.query

   
  return (
    <div>
        {pid && <ProductSingle pid={pid} ptype={ptype} slug={slug} />}
    </div>
  )
}
