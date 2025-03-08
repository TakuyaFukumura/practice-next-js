import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>「About」ページへようこそ! このページでは、プロジェクトや会社に関する情報を提供します。</p>
      <p>Next.js は、強力なサーバー側レンダリング アプリケーションを簡単に作成できる React フレームワークです。</p>
      <p>
        <Link href="/">Go to Home Page</Link> {/* Homeページへのリンク */}
      </p>
    </div>
  );
};

export default AboutPage;
