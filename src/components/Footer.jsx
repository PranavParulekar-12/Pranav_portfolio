import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-b border-neutral-900 p-5 flex items-center justify-center">
      <p className="text-sm font-light text-center text-neutral-500">
        {`Copyright © Pranav Parulekar ${currentYear} | All Rights Reserved`}
      </p>
    </div>
  );
}

export default Footer;
