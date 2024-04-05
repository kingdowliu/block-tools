async function simulateClick() {
    await clickEntrance();
    await clickTask();
    await clickBonk();
    await clickZzz();
    await clickPoo();
    await clickEntrance();
}

async function clickEntrance() {
    var entranceElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#plasmo-overlay-0 > div.fixed.z-\\[100\\].top-0.left-0.w-screen.h-screen.pointer-events-none > div > img");
    if (entranceElement !== null) {
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        entranceElement.dispatchEvent(clickEvent);
    } else {
          console.log('没有找到匹配的元素');
    }
}

async function clickTask() {
    var taskElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.w-full.flex.flex-col.items-center > div.flex.items-center.bg-contain.bg-center.bg-no-repeat.relative.\\!items-start.border-b-\\[2px\\].border-solid.border-secondary.rounded-tl-\\[12px\\].rounded-tr-\\[12px\\].pt-\\[4px\\].pl-\\[4px\\].w-\\[375px\\].min-h-\\[100px\\].bg-header-container > div.max-w-\\[40px\\].z-\\[20\\].fixed.top-\\[8px\\].right-\\[8px\\].flex.flex-col.gap-\\[4px\\].items-center > button:nth-child(2) > img")
    if (taskElement !== null) {
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        taskElement.dispatchEvent(clickEvent);
    } else {
          console.log('没有找到匹配的元素');
    }
}

async function clickBonk() {
    var bonkElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.absolute.top-0.left-0.right-0.bottom-0.z-\\[100\\].grid.place-items-center > div.relative.z-\\[200\\].w-max.max-w-\\[375px\\] > div > div > div.w-max.max-h-\\[340px\\].overflow-auto.scroll-container > div > div:nth-child(1) > button")
    if (bonkElement !== null) {
        if (bonkElement.textContent === 'Done') {
            console.log('bonk任务已完成');
            return;
        }
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        bonkElement.dispatchEvent(clickEvent);
        await new Promise((resolve) => setTimeout(resolve, 300));

        for (let i = 0; i < 88; i++) {
            var clickElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.w-full.flex.flex-col.items-center > div > img")
            clickElement.dispatchEvent(clickEvent);
            await new Promise((resolve) => setTimeout(resolve, 300));
        }

        // confirm
        var confirmElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.absolute.top-0.left-0.right-0.bottom-0.z-\\[100\\].grid.place-items-center > div.relative.z-\\[200\\].w-max.max-w-\\[375px\\] > div > div > button")
        confirmElement.dispatchEvent(clickEvent);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // close
        var closeElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.w-full.flex.flex-col.items-center > div > div > button");
        closeElement.dispatchEvent(clickEvent);
    } else {
          console.log('没有找到匹配的元素');
    }
}

async function clickZzz() {
    var zzzElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.absolute.top-0.left-0.right-0.bottom-0.z-\\[100\\].grid.place-items-center > div.relative.z-\\[200\\].w-max.max-w-\\[375px\\] > div > div > div.w-max.max-h-\\[340px\\].overflow-auto.scroll-container > div > div:nth-child(2) > button")
    if (zzzElement !== null) {
        if (zzzElement.textContent === 'Done') {
            console.log("zzz任务已完成");
            return;
        }
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        zzzElement.dispatchEvent(clickEvent);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // done
        var doneElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.w-full.flex.flex-col.items-center > div > div > button")
        doneElement.dispatchEvent(clickEvent);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // confirm
        var confirmElement =document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.absolute.top-0.left-0.right-0.bottom-0.z-\\[100\\].grid.place-items-center > div.relative.z-\\[200\\].w-max.max-w-\\[375px\\] > div > div > button")
        confirmElement.dispatchEvent(clickEvent);
    } else {
        console.log('没有找到匹配的元素');
    }
}

async function clickPoo() {
    console.log("click poo");
    var pooElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.absolute.top-0.left-0.right-0.bottom-0.z-\\[100\\].grid.place-items-center > div.relative.z-\\[200\\].w-max.max-w-\\[375px\\] > div > div > div.w-max.max-h-\\[340px\\].overflow-auto.scroll-container > div > div:nth-child(3) > button")
    if (pooElement !== null) {
        if (pooElement.textContent === 'Done') {
            console.log("poo 任务已完成");
            return;
        }
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        pooElement.dispatchEvent(clickEvent);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // done
        var doneElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.w-full.flex.flex-col.items-center > div > div > button")
        doneElement.dispatchEvent(clickEvent);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // confirm
        var confirmElement =document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#x-container > div.absolute.top-0.left-0.right-0.bottom-0.z-\\[100\\].grid.place-items-center > div.relative.z-\\[200\\].w-max.max-w-\\[375px\\] > div > div > button")
        confirmElement.dispatchEvent(clickEvent);
    } else {
        console.log('没有找到匹配的元素');
    }
}

function run() {
    const now = new Date();
    const utcNow = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    const utcHours = utcNow.getUTCHours();
    const utcMinutes = utcNow.getUTCMinutes();

    if (utcHours < 5 || (utcHours === 5 && utcMinutes === 0)) {
        simulateClick();
    }
}

setInterval(run, 5 * 60 * 1000);
