#https://www.xuetu123.com/
## 视频教程
# className 比 inline style 的性能要好。
# 浏览器默认16px  默认1rem就是16px
# sass 有下划线的只能导入，不能单独使用
# defaultIndex disabled mode onSelect
# nodeJS 是 commonjs 模块化规范
"build": "npm run build-ts && npm run build-css",
NPM
yituxiu
zwh520ZWH@

npm删除包
npm unpublish vikingship-whzhang@0.0.1 








jestjs.io

10月2号，8点到深圳
10月6号，13点30到16点整（350）


 const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {files}=e.target;
        console.log(e.target.files)
        if(files){
            const uploadedFile=files[0];
            const formData=new FormData();
            formData.append(uploadedFile.name,uploadedFile)
            Axios.post('https://run.mocky.io/v3/e8480bcb-ede1-497e-986b-bc7f82111b2e',formData,{
                headers:{'Content-Type':'multipart/form-data'}
            }).then(res=>{
                console.log(res)
            })
        }
    }
