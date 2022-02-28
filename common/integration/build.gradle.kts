plugins {
    kotlin("multiplatform")
    id("com.android.library")
    kotlin("plugin.serialization") version Versions.kotlin
}

android {
    compileSdk = AppConfig.compileSdkVersion

    defaultConfig {
        minSdk = AppConfig.minSdkVersion
        targetSdk = AppConfig.targetSdkVersion
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }

    sourceSets {
        named("main") {
            manifest.srcFile("src/androidMain/AndroidManifest.xml")
            res.srcDirs("src/androidMain/res")
        }
    }
}

kotlin {
    android()
    jvm("desktop")

    sourceSets["commonMain"].dependencies {
        implementation(project(":common:model"))
        implementation(project(":common:persistence:database"))
        implementation(project(":common:persistence:settings"))
        implementation(project(":common:network"))

        implementation(Dependencies.Kotlin.serializationCore)

        implementation(Dependencies.OrbitMVI.core)

        with(Dependencies.Squareup.SQLDelight) {
            implementation(coroutineExtensions)
        }

        with(Dependencies.ArkIvanov.MVIKotlin) {
            implementation(mviKotlin)
            implementation(mviKotlinMain)
            implementation(mviKotlinExtensionsCoroutines)
        }

        with(Dependencies.Koin) {
            api(core)
            api(test)
        }

        with(Dependencies.Log) {
            api(kermit)
        }
    }

    sourceSets["androidMain"].dependencies {
        with(Dependencies.Android) {
            implementation(lifecycleRuntimeKtx)
            implementation(composeViewModel)
        }

        with(Dependencies.Koin) {
            implementation(android)
        }
    }

    sourceSets["desktopMain"].dependencies {
        implementation(Dependencies.Log.slf4j)
    }
}
