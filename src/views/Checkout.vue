<template>
    <div class="page-title-container">
        <div class="page-title">Checkout</div>
    </div>
    <div id="outside-container">
        <section id="checkout">
            <div v-for="(item, idx) in checkoutItems" :key="idx">
                    <span>
                        <img width="60" height="60" :style="{ 'background-image': 'url(' + item.artworkUrl60 + ')' }">
                        <span v-if="item.trackExplicitness && (item.trackExplicitness.toLowerCase() === 'explicit' || /^clean/.test(item.trackExplicitness.toLowerCase()))" 
                            class="explicitness-container"
                            :class="{'explicit': item.trackExplicitness.toLowerCase() === 'explicit', 
                                    'clean': /^clean/.test(item.trackExplicitness.toLowerCase()) }">
                                    {{item.trackExplicitness}}
                        </span>
                    </span>
                    <span class="name-cell"><span class="song-name">{{item.trackName}}</span></span>
                    <span class="name-cell"><span class="song-name">{{item.artistName}}</span></span>
                    <span class="small-font" style="margin-left: auto;">${{item.trackPrice}}</span> 
            </div>
            <hr style="color: white;">
            <div class="space-btwn">
                <span>Total:</span>
                <span style="padding-right: .5em;">${{ orderTotal }}</span>
            </div>
        </section>
        <section>
            <form id="payment-form">
                <div id="card-element"></div>
                <button id="stripe-button">
                    <div class="spinner hidden" id="spinner"></div>
                    <span id="button-text">Pay</span>
                </button>
                <p id="card-error" role="alert"></p>
                <p class="result-message hidden">
                    Payment succeeded, see the result in your
                    <a href="" target="_blank">Stripe dashboard.</a> Refresh the page to pay again.
                </p>
            </form>
        </section>
    </div>
</template>

<script>
    import { computed, onMounted, reactive, toRefs } from 'vue'
    import store from '@/store'
    import { createPaymentIntent } from '@/shared/logic'
    import { redirectHome } from '@/shared/navigation'

    export default {
        name: 'Checkout',
        setup() {
            const priceReducer = (acc, {trackPrice = '0'}={}) => acc + parseFloat(trackPrice);
            const checkoutData = reactive({
                checkoutItems: [],
                orderTotal: computed(() => (checkoutData.checkoutItems).reduce(priceReducer, 0))
            });

            onMounted(() => {
                document.querySelector("#stripe-button").disabled = true;
                if (store.state.checkoutItems.length === 0) {
                    redirectHome();
                    return;
                }
                checkoutData.checkoutItems.push(...store.state.checkoutItems);
                createPaymentIntent(store.state.checkoutItems);
            });
            return { ...toRefs(checkoutData) };
        }
    }
</script>

<style scoped lang="scss">
    div#outside-container {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
        margin-top: 2em;
        
        section {
            margin: auto;
            &#checkout {
                div {
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: .5em;
                    & * {
                        display: block;
                        margin: auto .5em auto 0; 
                        .explicitness-container {
                            width: 60px;
                        }
                    }
                }
            }
        }

    }

    form {
        width: 30vw;
        min-width: 350px;
        align-self: center;
        box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
            0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
        border-radius: 7px;
        padding: 40px;
    }

    input {
        border-radius: 6px;
        margin-bottom: 6px;
        padding: 12px;
        border: 1px solid rgba(50, 50, 93, 0.1);
        height: 44px;
        font-size: 16px;
        width: 100%;
        background: white;
    }

    .result-message {
        line-height: 22px;
        font-size: 16px;
    }

    .result-message a {
        color: #42B9FF;
        font-weight: 600;
        text-decoration: none;
    }

    .hidden {
        display: none;
    }

    #card-error {
        color: rgb(105, 115, 134);
        text-align: left;
        font-size: 13px;
        line-height: 17px;
        margin-top: 12px;
    }

    #card-element {
        border-radius: 4px 4px 0 0 ;
        padding: 12px;
        border: 1px solid rgba(50, 50, 93, 0.1);
        height: 44px;
        width: 100%;
        background: white;
    }

    #payment-request-button {
        margin-bottom: 32px;
    }

    /* Buttons and links */
    button {
        background: #42B9FF;
        color: #ffffff;
        font-family: Arial, sans-serif;
        border-radius: 0 0 4px 4px;
        border: 0;
        padding: 12px 16px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        display: block;
        transition: all 0.2s ease;
        box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
        width: 100%;
    }

    button:hover {
        filter: contrast(115%);
    }

    button:disabled {
        opacity: 0.5;
        cursor: default;
    }

    /* spinner/processing state, errors */
    .spinner,
    .spinner:before,
    .spinner:after {
        border-radius: 50%;
    }

    .spinner {
        color: #ffffff;
        font-size: 22px;
        text-indent: -99999px;
        margin: 0px auto;
        position: relative;
        width: 20px;
        height: 20px;
        box-shadow: inset 0 0 0 2px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }
    .spinner:before,
    .spinner:after {
        position: absolute;
        content: "";
    }

    .spinner:before {
        width: 10.4px;
        height: 20.4px;
        background: #42B9FF;
        border-radius: 20.4px 0 0 20.4px;
        top: -0.2px;
        left: -0.2px;
        -webkit-transform-origin: 10.4px 10.2px;
        transform-origin: 10.4px 10.2px;
        -webkit-animation: loading 2s infinite ease 1.5s;
        animation: loading 2s infinite ease 1.5s;
    }

    .spinner:after {
        width: 10.4px;
        height: 10.2px;
        background: #42B9FF;
        border-radius: 0 10.2px 10.2px 0;
        top: -0.1px;
        left: 10.2px;
        -webkit-transform-origin: 0px 10.2px;
        transform-origin: 0px 10.2px;
        -webkit-animation: loading 2s infinite ease;
        animation: loading 2s infinite ease;
    }

    @-webkit-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @media only screen and (max-width: 600px) {
        form {
            width: 80vw;
        }
    }
</style>