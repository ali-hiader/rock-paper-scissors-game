import * as React from "react";
import { Dialog } from "radix-ui";
import Cross from "./Icons/cross";
import RulesGeneralIcon from "./Icons/rules-icons";
import Arrow from "./Icons/arrow";

const RulesPage = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="absolute w-fit bottom-6 sm:right-6 right-1/2 sm:translate-x-0 translate-x-1/2 uppercase tracking-wider border border-white px-8 py-1.5 rounded-md text-sm">
        rules
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[470px] grid grid-rows-[auto_1fr] gap-6 bg-white rounded-xl outline-none px-8 pt-6 pb-8">
        <Dialog.Title className="flex items-center justify-between">
          <h1 className="uppercase text-[#3b4363] text-3xl font-bold">rules</h1>
          <button>
            <Dialog.Close asChild>
              <Cross />
            </Dialog.Close>
          </button>
        </Dialog.Title>
        <Dialog.Description className="grid grid-cols-[1fr_auto_1fr]">
          <RulesGeneralIcon iconName="paper" />
          <div className="place-self-center size-fit flex flex-col items-center justify-center">
            <p className="uppercase text-gray-400 leading-[0] font-bold text-sm">
              Beats
            </p>
            <Arrow className="size-16 text-gray-400" />
          </div>
          <RulesGeneralIcon iconName="scissors" />
          <section className="col-span-3 flex items-center justify-around">
            <div className="size-fit flex items-center justify-center">
              <p className="uppercase text-gray-400 leading-[0] font-bold text-sm">
                Beats
              </p>
              <Arrow className="size-16 text-gray-400 -rotate-[135deg]" />
            </div>
            <div className="size-fit flex items-center justify-center">
              <Arrow className="size-16 text-gray-400 rotate-[135deg]" />
              <p className="uppercase text-gray-400 leading-[0] font-bold text-sm">
                Beats
              </p>
            </div>
          </section>
          <RulesGeneralIcon buttonCss="col-span-3" iconName="rock" />{" "}
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default RulesPage;
