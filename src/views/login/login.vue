<template>
    <div class="login-container">
        <el-form autoComplete="on" ref="loginForm" label-position="left"
                 label-width="0px"
                 class="card-box login-form">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="email">
                <span class="svg-container"></span>
                <el-input name="email" type="text"  autoComplete="on"
                          placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container"></span>
                <el-input name="password" type="password" autoComplete="on" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
