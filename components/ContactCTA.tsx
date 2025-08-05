'use client'
import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from '@/components/ui/button';

const ContactCTA = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your SaaS MVP?</h2>
        <p className="mb-8">
          Let’s turn your idea into reality. Whether you have a concept or a fully fleshed-out plan, I'm here to help you every step of the way.
        </p>
     <Cal namespace="30min"
    calLink="gabriel-lizb9h/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    
    
  />
      </div>
    </section>
  );
};

export default ContactCTA;