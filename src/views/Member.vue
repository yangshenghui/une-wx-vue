<template>
	<div class="une-container">
    <div class="une-header">
        <van-nav-bar title="开通会员" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="une-main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="name"
          name="name"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="phone"
          name="phone"
          label="手机号"
          type="tel"
          placeholder="手机号"
        />
        <van-field
          v-model="email"
          name="email"
          label="邮箱"
          placeholder="邮箱"
        />
        <van-field
          v-model="company"
          name="company"
          required
          label="公司"
          placeholder="公司"
          :rules="[{ required: true, message: '请填写公司' }]"
        />
        <van-field
          v-model="position"
          name="position"
          label="职位"
          placeholder="职位"
        />
        <van-field name="issendemail" label="愿意接受邮件电话咨询">
          <template #input>
            <van-switch active-color="#8294ae" v-model="issendemail" size="20" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" color="#8294ae"  native-type="submit">开通</van-button>
        </div>
      </van-form>
    </div>
	</div>
</template>
<script>
  import { getOpenid } from "../utils/utils";
  import { wxpay } from "../utils/wxapi";
	export default {
		data() {
			return {
				name: "",
        phone: "",
        email: "",
        company: "",
        position: "",
        issendemail: false
			}
		},
    created () {

    },
		methods: {
      onClickLeft() {
          this.$router.go(-1)
      },
      async getCustomer() {
        if(getOpenid()) {
          const cunstomer = await this.$api.reqCustomer(getOpenid())
          if(cunstomer.ismember == 1) {
            this.$router.push({ name: 'User', params: {}});
          } else{
            this.$notify({ type: 'danger', message: '支付失败' });
          }

        }
      },
      async onSubmit(values) {
        console.log('submit', values);
        if(values.email == "" && values.phone == "") {
            this.$notify({ type: 'danger', message: '请填写手机或邮箱' });
        }
        const openid = getOpenid()
        console.log(openid)
        if(openid) {
          values.openid = openid;
          const paySign = await this.$api.createUnifiedOrder(values)
          wxpay(paySign)
          this.$dialog.alert({
            title: '支付',
            message: '已完成支付',
            theme: 'round-button',
            confirmButtonColor: "#8294ae"
          }).then(() => {
            this. getCustomer()
          });
        }
      },
		}
	}
</script>
<style lang="less" scoped>
 /deep/ .van-icon {
   color: #8294ae;
 }
 /deep/ .van-nav-bar__text {
   color: #8294ae;
 }

</style>
