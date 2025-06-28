import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
import { SignJWT } from "jose";

export async function POST(request) {

    const reqBody = await request.json();

    try {

        await connectDB();
        const savedUser = await UserModel.findOne({email:reqBody.email});
        console.log(savedUser);

        if(savedUser) {
            if(reqBody.password == savedUser.password) {

                const secretKey = new TextEncoder().encode("next-market-app-book");  
                const payload = {
                    email:reqBody.email
                }
                const token = await new SignJWT(payload).
                                    setProtectedHeader({alg:"HS256"}).
                                    setExpirationTime("1d").
                                    sign(secretKey);
                
                return NextResponse.json({message:"ログイン成功", token:token });
            } else {
                return NextResponse.json({message:"ログイン失敗:パスワードが違います。"});        
            }
        } else {
            return NextResponse.json({message:"ログイン失敗:ユーザーを登録してください。"});    
        }
    } catch {
        return NextResponse.json({message:"ログイン失敗"});
    }
}