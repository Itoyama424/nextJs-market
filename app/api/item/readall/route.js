import { NextResponse } from "next/server"; 
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET() {
    try {
  
        await connectDB();
        const allItems = await ItemModel.find();
console.log("全件取得")
        return NextResponse.json({message: "アイテム読み取り成功(ALL)", allItems : allItems});
    } catch {
        return NextResponse.json({message: "アイテム読み取り失敗(ALL)"});
    }
}
