import { routerConstant } from "@/src/constant/routerConstant";
import { QrcodeOutlined,CloseCircleOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useState } from "react";

const MyTicketView = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalFinish = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div>
        <div>
          <ul className="flex w-full justify-center border-slate-100 border-b-1 border-b ">
            <li className=" mr-[32px] ">
              <Link href={routerConstant.myticket.qr}>
                <span className="py-3 inline-block cursor-pointer
                ">HOME</span>
              </Link>
            </li>
            <li>
              <Link href={routerConstant.myticket.index}>
                <span className="py-3 inline-block cursor-pointer">マイチケット</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="p-3 bg-slate-800 rounded-sm text-white inline-flex" onClick={handleOpenModal}>
            <span>
              <QrcodeOutlined />
            </span>
            <span>
              Qr
            </span>
          </div>
          
        </div>
      </div>
      {openModal && (
        <div
          className='fixed z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 h-full w-full'
          id='modal'
        >
          <div className='flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center bg-white '>
            <div className='fixed inset-0 transition-opacity'>
              <div className='absolute inset-0 bg-gray-900 opacity-75' />
            </div>
            <div
              className='xl:w-[480px] inline-block align-center bg-white rounded-lg text-left 
               transform transition-all py-10 absolute top-2/4 left-[20px] right-[20px] 
               -translate-y-1/2'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              <div className=" absolute top-[-10px] right-[-10px] bg-white rounded-full flex" onClick={handleModalFinish}>
                <CloseCircleOutlined />
              </div>
              <div className=" p-2 ">
              【劇場公演】HKT48　ひまわり組「パジャマドライブ」公演
              </div>
              
            </div>
          </div>
        </div>
      )}

    </>
    
  );
};

export default MyTicketView;