import { jwtVerify } from "jose";
import { NextResponse } from "next/server"

export async function middleware(request) {

    //const token = await request.headers.get("Authorization")?.split(" ")[1];
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bXlAZ21haWwuY29tIiwiZXhwIjoxNzUxMDMyNjQ5fQ.q4PZnTGH4gKs5j7D2dd59GwLcqvyf35ti7q32KSmcQc";

    if(!token){
        return NextResponse.json({message: "トークンがありません。"});    
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book");  
        const decodetJwt = await jwtVerify(token, secretKey);

        console.log("decodetJwt:", decodetJwt);

        return NextResponse.next();
    } catch {
        return NextResponse.json({message:"トークンが正しくないので、ログインできません。"});
    }

    
}

export const config = {
    matcher : ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"]
}