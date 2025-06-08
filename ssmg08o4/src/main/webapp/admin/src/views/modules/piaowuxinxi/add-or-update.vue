<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
                        <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="票务名称" prop="piaowumingcheng">
          <el-input v-model="ruleForm.piaowumingcheng" 
              placeholder="票务名称" clearable  :readonly="ro.piaowumingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="票务名称" prop="piaowumingcheng">
              <el-input v-model="ruleForm.piaowumingcheng" 
                placeholder="票务名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info' && !ro.piaowutupian" label="票务图片" prop="piaowutupian">
          <file-upload
          tip="点击上传票务图片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.piaowutupian?ruleForm.piaowutupian:''"
          @change="piaowutupianUploadChange"
          ></file-upload>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.piaowutupian" label="票务图片" prop="piaowutupian">
            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.piaowutupian.split(',')" :src="item" width="100" height="100">
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="演出城市" prop="yanchuchengshi">
          <el-input v-model="ruleForm.yanchuchengshi" 
              placeholder="演出城市" clearable  :readonly="ro.yanchuchengshi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="演出城市" prop="yanchuchengshi">
              <el-input v-model="ruleForm.yanchuchengshi" 
                placeholder="演出城市" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="演出地点" prop="yanchudidian">
          <el-input v-model="ruleForm.yanchudidian" 
              placeholder="演出地点" clearable  :readonly="ro.yanchudidian"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="演出地点" prop="yanchudidian">
              <el-input v-model="ruleForm.yanchudidian" 
                placeholder="演出地点" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="演出时间" prop="yanchushijian">
            <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="ruleForm.yanchushijian" 
                type="datetime"
                placeholder="演出时间">
            </el-date-picker>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.yanchushijian" label="演出时间" prop="yanchushijian">
              <el-input v-model="ruleForm.yanchushijian" 
                placeholder="演出时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="结束时间" prop="jieshushijian">
            <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="ruleForm.jieshushijian" 
                type="datetime"
                placeholder="结束时间">
            </el-date-picker>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.jieshushijian" label="结束时间" prop="jieshushijian">
              <el-input v-model="ruleForm.jieshushijian" 
                placeholder="结束时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="演出名单" prop="yanchumingdan">
          <el-input v-model="ruleForm.yanchumingdan" 
              placeholder="演出名单" clearable  :readonly="ro.yanchumingdan"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="演出名单" prop="yanchumingdan">
              <el-input v-model="ruleForm.yanchumingdan" 
                placeholder="演出名单" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="座位类型" prop="zuoweileixing">
          <el-select v-model="ruleForm.zuoweileixing" placeholder="请选择座位类型">
            <el-option
                v-for="(item,index) in zuoweileixingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="座位类型" prop="zuoweileixing">
	      <el-input v-model="ruleForm.zuoweileixing"
                placeholder="座位类型" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="票务备注" prop="piaowubeizhu">
          <el-input v-model="ruleForm.piaowubeizhu" 
              placeholder="票务备注" clearable  :readonly="ro.piaowubeizhu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="票务备注" prop="piaowubeizhu">
              <el-input v-model="ruleForm.piaowubeizhu" 
                placeholder="票务备注" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info'" label="宣传视频" prop="xuanchuanshipin">
          <file-upload
          tip="点击上传宣传视频"
          action="file/upload"
          :limit="1"
          :multiple="true"
          :fileUrls="ruleForm.xuanchuanshipin?ruleForm.xuanchuanshipin:''"
          @change="xuanchuanshipinUploadChange"
          ></file-upload>
        </el-form-item> 
        <div v-else>
          <el-form-item v-if="ruleForm.xuanchuanshipin" label="宣传视频" prop="xuanchuanshipin">
            <el-button type="text" size="small" @click="download(ruleForm.xuanchuanshipin)">预览</el-button>
          </el-form-item>
        </div>
      </el-col>
                                                                                                                              <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="价格" prop="price">
          <el-input v-model="ruleForm.price" 
              placeholder="价格" clearable  :readonly="ro.price"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="价格" prop="price">
              <el-input v-model="ruleForm.price" 
                placeholder="价格" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="座位总数" prop="number">
          <el-input v-model="ruleForm.number" 
              placeholder="座位总数" clearable  :readonly="ro.number"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="座位总数" prop="number">
              <el-input v-model="ruleForm.number" 
                placeholder="座位总数" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                                            </el-row>
                                                                                                                                                                                                                                          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="已选座位[用,号隔开]" prop="selected">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="已选座位[用,号隔开]"
                  v-model="ruleForm.selected" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.selected" label="已选座位[用,号隔开]" prop="selected">
                    <span>{{ruleForm.selected}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
                                                                                                                                                                                  <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="演出详情" prop="yanchuxiangqing">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.yanchuxiangqing" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.yanchuxiangqing" label="演出详情" prop="yanchuxiangqing">
                    <span v-html="ruleForm.yanchuxiangqing"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
                                                                                          <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    
    
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"rgba(152, 129, 129, 1)","inputBorderRadius":"22px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"22px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"22px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"#606266","addEditBoxColor":"rgba(210, 194, 194, 0.29)","dateIconFontSize":"14px","btnSaveBgColor":"#409EFF","uploadIconFontColor":"#8c939d","textareaBorderColor":"rgba(152, 129, 129, 1)","btnCancelBgColor":"rgba(143, 222, 143, 1)","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"22px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"#606266","dateBorderColor":"rgba(152, 129, 129, 1)","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"22px","inputBgColor":"rgba(252, 250, 250, 1)","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"22px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"rgba(152, 129, 129, 1)","inputBorderColor":"rgba(152, 129, 129, 1)","uploadBorderColor":"rgba(152, 129, 129, 1)","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"22px","selectFontColor":"#606266","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	piaowumingcheng : false,
	piaowutupian : false,
	yanchuchengshi : false,
	yanchudidian : false,
	yanchushijian : false,
	jieshushijian : false,
	yanchumingdan : false,
	zuoweileixing : false,
	piaowubeizhu : false,
	xuanchuanshipin : false,
	yanchuxiangqing : false,
	clicktime : false,
	clicknum : false,
	price : false,
	number : false,
	selected : false,
      },
            ruleForm: {
                	        piaowumingcheng: '',
	                        	        piaowutupian: '',
	                        	        yanchuchengshi: '',
	                        	        yanchudidian: '',
	                        	        yanchushijian: '',
	                        	        jieshushijian: '',
	                        	        yanchumingdan: '',
	                        	        zuoweileixing: '',
	                        	        piaowubeizhu: '',
	                        	        xuanchuanshipin: '',
	                        	        yanchuxiangqing: '',
	                        	        clicktime: '',
	                        	                        	        price: '',
	                        	        number: '',
	                        	        selected: '',
	                      },
                                                                                                                          zuoweileixingOptions: [],
                                                                                                                                    rules: {
                  piaowumingcheng: [
                            { required: true, message: '票务名称不能为空', trigger: 'blur' },
                                    	                                                              ],
                  piaowutupian: [
                                    	                                                              ],
                  yanchuchengshi: [
                            { required: true, message: '演出城市不能为空', trigger: 'blur' },
                                    	                                                              ],
                  yanchudidian: [
                            { required: true, message: '演出地点不能为空', trigger: 'blur' },
                                    	                                                              ],
                  yanchushijian: [
                            { required: true, message: '演出时间不能为空', trigger: 'blur' },
                                    	                                                              ],
                  jieshushijian: [
                            { required: true, message: '结束时间不能为空', trigger: 'blur' },
                                    	                                                              ],
                  yanchumingdan: [
                                    	                                                              ],
                  zuoweileixing: [
                            { required: true, message: '座位类型不能为空', trigger: 'blur' },
                                    	                                                              ],
                  piaowubeizhu: [
                                    	                                                              ],
                  xuanchuanshipin: [
                                    	                                                              ],
                  yanchuxiangqing: [
                                    	                                                              ],
                  clicktime: [
                                    	                                                              ],
                  clicknum: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  price: [
                            { required: true, message: '价格不能为空', trigger: 'blur' },
                                                    { validator: validateNumber, trigger: 'blur' },
            	                                                              ],
                  number: [
                            { required: true, message: '座位总数不能为空', trigger: 'blur' },
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  selected: [
                                    	                                                              ],
              }
    };
  },
  props: ["parent"],
  computed: {
                                                                                                                                                                                                      },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
        // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          	            if(o=='piaowumingcheng'){
            this.ruleForm.piaowumingcheng = obj[o];
	    this.ro.piaowumingcheng = true;
            continue;
          }
	            	            if(o=='piaowutupian'){
            this.ruleForm.piaowutupian = obj[o];
	    this.ro.piaowutupian = true;
            continue;
          }
	            	            if(o=='yanchuchengshi'){
            this.ruleForm.yanchuchengshi = obj[o];
	    this.ro.yanchuchengshi = true;
            continue;
          }
	            	            if(o=='yanchudidian'){
            this.ruleForm.yanchudidian = obj[o];
	    this.ro.yanchudidian = true;
            continue;
          }
	            	            if(o=='yanchushijian'){
            this.ruleForm.yanchushijian = obj[o];
	    this.ro.yanchushijian = true;
            continue;
          }
	            	            if(o=='jieshushijian'){
            this.ruleForm.jieshushijian = obj[o];
	    this.ro.jieshushijian = true;
            continue;
          }
	            	            if(o=='yanchumingdan'){
            this.ruleForm.yanchumingdan = obj[o];
	    this.ro.yanchumingdan = true;
            continue;
          }
	            	            if(o=='zuoweileixing'){
            this.ruleForm.zuoweileixing = obj[o];
	    this.ro.zuoweileixing = true;
            continue;
          }
	            	            if(o=='piaowubeizhu'){
            this.ruleForm.piaowubeizhu = obj[o];
	    this.ro.piaowubeizhu = true;
            continue;
          }
	            	            if(o=='xuanchuanshipin'){
            this.ruleForm.xuanchuanshipin = obj[o];
	    this.ro.xuanchuanshipin = true;
            continue;
          }
	            	            if(o=='yanchuxiangqing'){
            this.ruleForm.yanchuxiangqing = obj[o];
	    this.ro.yanchuxiangqing = true;
            continue;
          }
	            	            if(o=='clicktime'){
            this.ruleForm.clicktime = obj[o];
	    this.ro.clicktime = true;
            continue;
          }
	            	            if(o=='clicknum'){
            this.ruleForm.clicknum = obj[o];
	    this.ro.clicknum = true;
            continue;
          }
	            	            if(o=='price'){
            this.ruleForm.price = obj[o];
	    this.ro.price = true;
            continue;
          }
	            	            if(o=='number'){
            this.ruleForm.number = obj[o];
	    this.ro.number = true;
            continue;
          }
	            	            if(o=='selected'){
            this.ruleForm.selected = obj[o];
	    this.ro.selected = true;
            continue;
          }
	                    }
                                                                                                                                                                                                                                                                              }
            // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
                                                                                                                                                                                                                                                                                                                                                                                  } else {
          this.$message.error(data.msg);
        }
      });
                                                                                                                                                                        this.zuoweileixingOptions = "普通,贵宾".split(',')
                                                                                                                                                                            },
                                                                                                                                        // 多级联动参数
                                                                                                                                                                            info(id) {
      this.$http({
        url: `piaowuxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
	this.ruleForm.yanchuxiangqing = this.ruleForm.yanchuxiangqing.replace(reg,'../../../ssmg08o4/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },
        // 提交
    onSubmit() {
                  // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                                                                                                                                                                                                                                                                                                                                    this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `piaowuxinxi/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.piaowuxinxiCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.piaowuxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
                                    piaowutupianUploadChange(fileUrls) {
                this.ruleForm.piaowutupian = fileUrls;
				this.addEditUploadStyleChange()
            },
                                                                                                                    xuanchuanshipinUploadChange(fileUrls) {
                this.ruleForm.xuanchuanshipin = fileUrls;
				this.addEditUploadStyleChange()
            },
                                                                                    	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
