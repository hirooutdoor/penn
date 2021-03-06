import React from 'react'
import { CommentBox } from '../organism/CommentBox'
import { PopularPosts } from '../organism/PopularPosts'

interface Props {
  
}

const PostContents = (props: Props) => {
  return (
    <div className='my-8 align-middle text-justify leading-loose '>
      <h1 className='text-xl my-3'>はじめに</h1>
      <p>はじめまして。私は現在、Fearless.incでフロントエンジニアをしております。この会社に勤めてから5年＝エンジニアになってから5年が経ちましたが、実は私、元々とあるきっかけでPC恐怖症でPCを見ると必ずその日には悪夢でうなされていました。そんな私がなぜPCと一日中仲良くしなければいけない”エンジニア”という職業を選んだのか、今日はそんなことについて書いてみます。
      <br/>
      <br/>
      はじめまして。私は現在、Fearless.incでフロントエンジニアをしております。この会社に勤めてから5年＝エンジニアになってから5年が経ちましたが、実は私、元々とあるきっかけでPC恐怖症でPCを見ると必ずその日には悪夢でうなされていました。そんな私がなぜPCと一日中仲良くしなければいけない”エンジニア”という職業を選んだのか、今日はそんなことについて書いてみます。
      <br/>
      <br/>
      はじめまして。私は現在、Fearless.incでフロントエンジニアをしております。この会社に勤めてから5年＝エンジニアになってから5年が経ちましたが、実は私、元々とあるきっかけでPC恐怖症でPCを見ると必ずその日には悪夢でうなされていました。そんな私がなぜPCと一日中仲良くしなければいけない”エンジニア”という職業を選んだのか、今日はそんなことについて書いてみます。
      </p>

      <CommentBox>
        
      </CommentBox>

      <PopularPosts>

      </PopularPosts>
    </div>
  )
}

export default PostContents
